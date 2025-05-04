// #[allow(lint(self_transfer),unused_field, unused_use)]
// module lockup::lockupp{

//     use sui::coin::{Self,Coin};
//     use sui::sui::SUI;
//     use sui::balance::{Self,Balance};
//     use std::debug::print;
//     use std::string::{Self, String};
//     use sui::clock::{Self,Clock};
//     use sui::table::{Self, Table};
//     use sui::{dynamic_object_field as dof, event};
//     use sui::object::{Self, ID, UID};
//     use sui::transfer;
//     use sui::tx_context::{Self, TxContext};
//     use std::option::{Self, Option};
//     use std::vector;

//     #[test_only]
//     use sui::test_scenario;
//     #[test_only]
//     use sui::test_utils::assert_eq;

//     // --------------------------------Errors -----
//     const ErrSenderMismatch: u64 = 0;
//     const ErrNotEnoughSui: u64 = 1;
//     const ErrTxInProgress: u64 = 2;
//     const ErrAddressMismatch: u64 = 3;
//     const ErrLockedVaultIsOccupied: u64 = 4;
//     const ErrOwnerMismatch: u64 = 5;
//     const ErrNotCompleted: u64 = 6;
//     const ErrInsufficientBalance: u64 = 7;
//     const ErrOnlyOwnerOrAdmin: u64 = 8;
//     const ErrVaultNotFound: u64 = 9;
//     const ErrUserAlreadyRegistered: u64 = 10;
//     const ErrUserNotRegistered: u64 = 11;
//     const ErrInvalidAmount: u64 = 12;

//     // --------------------------------Structs -----
//     public struct LockUp has key {
//         id: UID,
//         users: Table<address, User>,
//         online_users: vector<OnlineUsers>,
//         cross_border_payments: vector<CrossBorderPayment>,
//         vaults: Table<address, Vault>,
//         admin: address,
//         fee_percentage: u64,
//         fee_balance: Balance<SUI>
//     }

//     public struct Vault has store {
//         owner: address,
//         balance: Balance<SUI>,
//         locked_amount: u64 // Amount currently being used in transactions
//     }

//     public struct OnlineUsers has store, drop {
//         user: address,
//         min: u64,
//         max: u64,
//         currency: vector<u8>,
//         last_seen: u64,
//         receiver: bool
//     }

//     public struct CrossBorderPayment has store {
//         id: u64,
//         creator: address,
//         in: Transaction,
//         out: Transaction,
//         completed: bool,
//         failed: bool,
//         created: u64,
//         amount_in_sui: u64,
//         sui_locked: u64,
//         vault_owner: address
//     }

//     public struct Transaction has store {
//         id: u64,
//         sender: Option<address>,
//         receiver: Option<address>,
//         started: Option<u64>,
//         finished: Option<u64>,
//         currency: vector<u8>,
//         amount_in_fiat: u64,
//         sent: bool,
//         received: bool,
//     }

//     public struct User has store, drop {
//         total_trades_completed: u64,
//         average_complete_time: u64,
//         total_completion_time: u64,
//         online: bool,
//         payment_methods: vector<String>
//     }

//     public struct AdminCap has key, store {
//         id: UID,
//     }

//     //---------------------------- Events ----------------------------
//     public struct SuiLocked has copy, drop {
//         amount: u64,
//         owner: address
//     }

//     public struct SuiReleased has copy, drop {
//         amount: u64,
//         owner: address
//     }

//     public struct CbpCreated has copy, drop {
//         creator: address,
//         receiver: address,
//         id: u64,
//     }

//     public struct UserRegistered has copy, drop {
//         user: address
//     }

//     public struct FeeCollected has copy, drop {
//         amount: u64
//     }

//     fun init(ctx: &mut TxContext) {
//         let sender = tx_context::sender(ctx);

//         let cap = AdminCap {
//             id: object::new(ctx)
//         };

//         transfer::transfer(cap, sender);

//         let app = LockUp {
//             id: object::new(ctx),
//             users: table::new(ctx),
//             online_users: vector::empty(),
//             cross_border_payments: vector::empty<CrossBorderPayment>(),
//             vaults: table::new(ctx),
//             admin: sender,
//             fee_percentage: 100, // 0.1% (stored as basis points: 100 = 0.1%)
//             fee_balance: balance::zero()
//         };

//         transfer::share_object(app);
//     }

//     // ------------------- User Management -------------------

//     public fun register_user(
//         app: &mut LockUp,
//         payment_methods: vector<String>,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         // Check if user is already registered
//         assert!(!table::contains(&app.users, sender), ErrUserAlreadyRegistered);

//         let user = User {
//             total_trades_completed: 0,
//             average_complete_time: 0,
//             total_completion_time: 0,
//             online: false,
//             payment_methods
//         };

//         table::add(&mut app.users, sender, user);

//         event::emit(UserRegistered {
//             user: sender
//         });
//     }

//     public fun update_payment_methods(
//         app: &mut LockUp,
//         payment_methods: vector<String>,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         // Check if user is registered
//         assert!(table::contains(&app.users, sender), ErrUserNotRegistered);

//         let user = table::borrow_mut(&mut app.users, sender);
//         user.payment_methods = payment_methods;
//     }

//     // ------------------- Vault Management -------------------

//     public fun create_vault(app: &mut LockUp, ctx: &mut TxContext) {
//         let sender = tx_context::sender(ctx);

//         // Create a new vault if it doesn't exist
//         if (!table::contains(&app.vaults, sender)) {
//             let vault = Vault {
//                 owner: sender,
//                 balance: balance::zero(),
//                 locked_amount: 0
//             };

//             table::add(&mut app.vaults, sender, vault);
//         }
//     }

//     public fun deposit_to_vault(
//         app: &mut LockUp,
//         sui: Coin<SUI>,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);
//         let amount = coin::value(&sui);

//         // Create vault if it doesn't exist
//         if (!table::contains(&app.vaults, sender)) {
//             create_vault(app, ctx);
//         };

//         // Add SUI to the vault
//         let vault = table::borrow_mut(&mut app.vaults, sender);
//         let sui_balance = coin::into_balance(sui);
//         balance::join(&mut vault.balance, sui_balance);

//         event::emit(SuiLocked {
//             amount,
//             owner: sender
//         });
//     }

//     public fun withdraw_from_vault(
//         app: &mut LockUp,
//         amount: u64,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         // Check if vault exists
//         assert!(table::contains(&app.vaults, sender), ErrVaultNotFound);

//         let vault = table::borrow_mut(&mut app.vaults, sender);

//         // Check if there's enough balance
//         let available_balance = balance::value(&vault.balance) - vault.locked_amount;
//         assert!(available_balance >= amount, ErrInsufficientBalance);

//         // Take SUI from the vault
//         let withdrawn_balance = balance::split(&mut vault.balance, amount);
//         let sui_coin = coin::from_balance(withdrawn_balance, ctx);

//         // Transfer SUI to the user
//         transfer::public_transfer(sui_coin, sender);

//         event::emit(SuiReleased {
//             amount,
//             owner: sender
//         });
//     }

//     // Helper function to check if a vault has sufficient available balance
//     fun vault_has_sufficient_balance(vault: &Vault, amount: u64): bool {
//         balance::value(&vault.balance) - vault.locked_amount >= amount
//     }

//     // Helper function to lock funds in a vault for a transaction
//     fun lock_vault_funds(vault: &mut Vault, amount: u64) {
//         assert!(vault_has_sufficient_balance(vault, amount), ErrInsufficientBalance);
//         vault.locked_amount = vault.locked_amount + amount;
//     }

//     // Helper function to unlock funds in a vault after a transaction
//     fun unlock_vault_funds(vault: &mut Vault, amount: u64) {
//         assert!(vault.locked_amount >= amount, ErrInsufficientBalance);
//         vault.locked_amount = vault.locked_amount - amount;
//     }

//     // ------------------- Cross-Border Payment Management -------------------

//     public fun create_cross_border_payment(
//         app: &mut LockUp,
//         clock: &Clock,
//         in_amount_fiat: u64,
//         in_currency: vector<u8>,
//         out_amount_fiat: u64,
//         out_currency: vector<u8>,
//         amount_in_sui: u64,
//         receiver_address: address,
//         ctx: &mut TxContext,
//     ) {
//         let sender = tx_context::sender(ctx);

//         // Ensure amount is valid
//         assert!(amount_in_sui > 0, ErrInvalidAmount);

//         // Ensure sender has a vault with sufficient balance
//         assert!(table::contains(&app.vaults, sender), ErrVaultNotFound);
//         let vault = table::borrow_mut(&mut app.vaults, sender);
//         assert!(vault_has_sufficient_balance(vault, amount_in_sui), ErrInsufficientBalance);

//         // Lock the funds in the vault
//         lock_vault_funds(vault, amount_in_sui);

//         let id = (vector::length(&app.cross_border_payments));

//         let in_tx = Transaction {
//             id,
//             sender: option::some(sender),
//             receiver: option::some(receiver_address),
//             started: option::none(),
//             finished: option::none(),
//             currency: in_currency,
//             amount_in_fiat: in_amount_fiat,
//             sent: false,
//             received: false,
//         };

//         let out_tx = Transaction {
//             id,
//             sender: option::none(),
//             receiver: option::some(sender),
//             started: option::none(),
//             finished: option::none(),
//             currency: out_currency,
//             amount_in_fiat: out_amount_fiat,
//             sent: false,
//             received: false,
//         };

//         let cbp = CrossBorderPayment {
//             id,
//             creator: sender,
//             in: in_tx,
//             out: out_tx,
//             completed: false,
//             failed: false,
//             created: clock::timestamp_ms(clock),
//             amount_in_sui,
//             sui_locked: amount_in_sui,
//             vault_owner: sender
//         };

//         vector::push_back(&mut app.cross_border_payments, cbp);

//         event::emit(CbpCreated {
//             creator: sender,
//             receiver: receiver_address,
//             id,
//         });
//     }

//     public fun cancel_transaction(
//         app: &mut LockUp,
//         cbp_id: u64,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         assert!(cbp_id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         let cbp = vector::borrow_mut(&mut app.cross_border_payments, cbp_id);

//         // Only the creator or admin can cancel
//         assert!(
//             cbp.creator == sender || app.admin == sender,
//             ErrOnlyOwnerOrAdmin
//         );

//         // Ensure transaction hasn't started yet
//         assert!(option::is_none(&cbp.in.started), ErrTxInProgress);

//         // Return locked funds to the vault
//         let vault = table::borrow_mut(&mut app.vaults, cbp.vault_owner);
//         unlock_vault_funds(vault, cbp.sui_locked);

//         // Mark as failed
//         cbp.failed = true;
//     }

//     public fun select_receiver(
//         app: &mut LockUp,
//         cbp_id: u64,
//         receiver_address: address,
//         ctx: &mut TxContext
//     ) {
//         assert!(cbp_id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         let cbp = vector::borrow_mut(&mut app.cross_border_payments, cbp_id);

//         // Ensure receiver has a vault with enough balance
//         assert!(table::contains(&app.vaults, receiver_address), ErrVaultNotFound);
//         let receiver_vault = table::borrow(&app.vaults, receiver_address);
//         assert!(
//             vault_has_sufficient_balance(receiver_vault, cbp.amount_in_sui),
//             ErrInsufficientBalance
//         );

//         let in_tx = &mut cbp.in;
//         in_tx.receiver = option::some(receiver_address);
//     }

//     public fun sender_accept_cbp(
//         app: &mut LockUp,
//         cbp_id: u64,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         assert!(cbp_id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         let cbp = vector::borrow_mut(&mut app.cross_border_payments, cbp_id);

//         // Ensure sender has a vault with enough balance
//         assert!(table::contains(&app.vaults, sender), ErrVaultNotFound);
//         let sender_vault = table::borrow(&app.vaults, sender);
//         assert!(
//             vault_has_sufficient_balance(sender_vault, cbp.amount_in_sui),
//             ErrInsufficientBalance
//         );

//         let out_tx = &mut cbp.out;
//         assert!(option::is_none(&out_tx.sender), ErrTxInProgress);
//         out_tx.sender = option::some(sender);
//     }

//     public fun confirm_sent_payment(
//         app: &mut LockUp,
//         cbp_id: u64,
//         clock: &Clock,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         assert!(cbp_id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         let cbp = vector::borrow_mut(&mut app.cross_border_payments, cbp_id);

//         let transaction = &mut cbp.in;
//         assert!(option::some(sender) == transaction.sender, ErrSenderMismatch);

//         transaction.sent = true;
//         transaction.started = option::some(clock::timestamp_ms(clock));
//     }

//     public fun confirm_received_payment(
//         app: &mut LockUp,
//         cbp_id: u64,
//         clock: &Clock,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         assert!(cbp_id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         let cbp = vector::borrow_mut(&mut app.cross_border_payments, cbp_id);

//         let transaction = &mut cbp.in;
//         assert!(option::some(sender) == transaction.receiver, ErrSenderMismatch);

//         transaction.received = true;
//         transaction.finished = option::some(clock::timestamp_ms(clock));

//         // If both transactions are completed, mark the CBP as completed
//         if (cbp.in.received && cbp.out.received) {
//             cbp.completed = true;
//         }
//     }

//     public fun confirm_outgoing_sent_payment(
//         app: &mut LockUp,
//         cbp_id: u64,
//         clock: &Clock,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         assert!(cbp_id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         let cbp = vector::borrow_mut(&mut app.cross_border_payments, cbp_id);

//         let transaction = &mut cbp.out;
//         assert!(option::some(sender) == transaction.sender, ErrSenderMismatch);

//         transaction.sent = true;
//         transaction.started = option::some(clock::timestamp_ms(clock));
//     }

//     public fun confirm_outgoing_received_payment(
//         app: &mut LockUp,
//         cbp_id: u64,
//         clock: &Clock,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         assert!(cbp_id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         let cbp = vector::borrow_mut(&mut app.cross_border_payments, cbp_id);

//         let transaction = &mut cbp.out;
//         assert!(option::some(sender) == transaction.receiver, ErrSenderMismatch);

//         transaction.received = true;
//         transaction.finished = option::some(clock::timestamp_ms(clock));

//         // If both transactions are completed, mark the CBP as completed
//         if (cbp.in.received && cbp.out.received) {
//             cbp.completed = true;
//         }
//     }

//     public fun release_sui_after_transaction(
//         app: &mut LockUp,
//         cbp_id: u64,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         assert!(cbp_id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         let cbp = vector::borrow_mut(&mut app.cross_border_payments, cbp_id);

//         // Only owner, admin, or participants can release
//         let is_authorized =
//             sender == cbp.vault_owner ||
//             sender == app.admin ||
//             sender == *option::borrow(&cbp.in.receiver) ||
//             sender == *option::borrow(&cbp.out.sender);

//         assert!(is_authorized, ErrOnlyOwnerOrAdmin);

//         // Check if the transaction is completed
//         assert!(cbp.completed, ErrNotCompleted);

//         // Calculate fee
//         let fee_amount = (cbp.sui_locked * app.fee_percentage) / 100000; // fee is in basis points (100 = 0.1%)
//         let release_amount = cbp.sui_locked - fee_amount;

//         // Update vault balances
//         let vault = table::borrow_mut(&mut app.vaults, cbp.vault_owner);
//         unlock_vault_funds(vault, cbp.sui_locked);

//         // Release SUI to the outgoing sender
//         let out_sender = *option::borrow(&cbp.out.sender);
//         let out_sender_vault = table::borrow_mut(&mut app.vaults, out_sender);

//         // Use balance transfer instead of coin transfer to avoid creating multiple coins
//         let transfer_balance = balance::split(&mut vault.balance, release_amount);
//         balance::join(&mut out_sender_vault.balance, transfer_balance);

//         // Collect fee
//         let fee_balance = balance::split(&mut vault.balance, fee_amount);
//         balance::join(&mut app.fee_balance, fee_balance);

//         event::emit(FeeCollected {
//             amount: fee_amount
//         });

//         // Mark transaction as fully completed
//         cbp.sui_locked = 0;
//     }

//     // ------------------- Online User Management -------------------

//     public fun add_to_online_users(
//         app: &mut LockUp,
//         receiver: bool,
//         clock: &Clock,
//         min: u64,
//         max: u64,
//         currency: vector<u8>,
//         ctx: &mut TxContext
//     ) {
//         let sender = tx_context::sender(ctx);

//         // Verify the user has enough balance in their vault if they're a receiver
//         if (receiver) {
//             assert!(table::contains(&app.vaults, sender), ErrVaultNotFound);
//             let vault = table::borrow(&app.vaults, sender);
//             assert!(vault_has_sufficient_balance(vault, max), ErrInsufficientBalance);
//         };

//         let online_user = OnlineUsers {
//             user: sender,
//             min,
//             max,
//             currency,
//             receiver,
//             last_seen: clock::timestamp_ms(clock)
//         };

//         vector::push_back(&mut app.online_users, online_user);
//     }

//     // ------------------- Admin Functions -------------------

//     public fun update_fee_percentage(
//         app: &mut LockUp,
//         _: &AdminCap,
//         fee_percentage: u64
//     ) {
//         // Fee should be between 0 and 5% (5000 basis points)
//         assert!(fee_percentage <= 5000, ErrInvalidAmount);
//         app.fee_percentage = fee_percentage;
//     }

//     public fun withdraw_fees(
//         app: &mut LockUp,
//         _: &AdminCap,
//         amount: u64,
//         ctx: &mut TxContext
//     ) {
//         assert!(balance::value(&app.fee_balance) >= amount, ErrInsufficientBalance);

//         let fee_balance = balance::split(&mut app.fee_balance, amount);
//         let fee_coin = coin::from_balance(fee_balance, ctx);

//         transfer::public_transfer(fee_coin, app.admin);
//     }

//     // ------------------- View Functions -------------------

//     public fun get_cbp(app: &LockUp, id: u64): &CrossBorderPayment {
//         assert!(id < vector::length(&app.cross_border_payments), ErrNotCompleted);
//         vector::borrow(&app.cross_border_payments, id)
//     }

//     public fun get_vault_balance(app: &LockUp, owner: address): (u64, u64) {
//         assert!(table::contains(&app.vaults, owner), ErrVaultNotFound);
//         let vault = table::borrow(&app.vaults, owner);

//         (balance::value(&vault.balance), vault.locked_amount)
//     }

//     public fun get_online_users_for_currency(app: &LockUp, currency: vector<u8>, receiver: bool): vector<address> {
//         let matching_users = vector::empty<address>();

//         let i = 0;
//         let len = vector::length(&app.online_users);

//         while (i < len) {
//             let user = vector::borrow(&app.online_users, i);

//             if (user.currency == currency && user.receiver == receiver) {
//                 vector::push_back(&mut matching_users, user.user);
//             };

//             i = i + 1;
//         };

//         matching_users
//     }

//     /// Helper Methods
//     fun calculate_user_statistics(app: &mut LockUp, id: u64, incoming: bool) {
//         let cbp = vector::borrow(&app.cross_border_payments, id);

//         if (incoming) {
//             let completion_time = *option::borrow<u64>(&cbp.in.finished) - *option::borrow<u64>(&cbp.in.started);
//             {
//                 // Update receiver stats
//                 let receiver = *option::borrow(&cbp.in.receiver);
//                 if (table::contains(&app.users, receiver)) {
//                     let user_data_receiver = table::borrow_mut(&mut app.users, receiver);
//                     user_data_receiver.total_trades_completed = user_data_receiver.total_trades_completed + 1;
//                     user_data_receiver.total_completion_time = user_data_receiver.total_completion_time + completion_time;
//                     user_data_receiver.average_complete_time = user_data_receiver.total_completion_time / user_data_receiver.total_trades_completed;
//                 }
//             };

//             {
//                 // Update sender stats
//                 let sender = *option::borrow(&cbp.in.sender);
//                 if (table::contains(&app.users, sender)) {
//                     let user_data_sender = table::borrow_mut(&mut app.users, sender);
//                     user_data_sender.total_trades_completed = user_data_sender.total_trades_completed + 1;
//                     user_data_sender.total_completion_time = user_data_sender.total_completion_time + completion_time;
//                     user_data_sender.average_complete_time = user_data_sender.total_completion_time / user_data_sender.total_trades_completed;
//                 }
//             };
//         }
//         else {
//             let completion_time = *option::borrow<u64>(&cbp.out.finished) - *option::borrow<u64>(&cbp.out.started);
//             {
//                 // Update receiver stats
//                 let receiver = *option::borrow(&cbp.out.receiver);
//                 if (table::contains(&app.users, receiver)) {
//                     let user_data_receiver = table::borrow_mut(&mut app.users, receiver);
//                     user_data_receiver.total_trades_completed = user_data_receiver.total_trades_completed + 1;
//                     user_data_receiver.total_completion_time = user_data_receiver.total_completion_time + completion_time;
//                     user_data_receiver.average_complete_time = user_data_receiver.total_completion_time / user_data_receiver.total_trades_completed;
//                 }
//             };

//             {
//                 // Update sender stats
//                 let sender = *option::borrow(&cbp.out.sender);
//                 if (table::contains(&app.users, sender)) {
//                     let user_data_sender = table::borrow_mut(&mut app.users, sender);
//                     user_data_sender.total_trades_completed = user_data_sender.total_trades_completed + 1;
//                     user_data_sender.total_completion_time = user_data_sender.total_completion_time + completion_time;
//                     user_data_sender.average_complete_time = user_data_sender.total_completion_time / user_data_sender.total_trades_completed;
//                 }
//             };
//         };
//     }

//     // ------------------- Tests -------------------

//     #[test]
//     fun test_init_success() {
//         let module_owner = @0xa;
//         let mut scenario_val = test_scenario::begin(module_owner);
//         let scenario = &mut scenario_val;
//         {
//             init(test_scenario::ctx(scenario));
//             let tx = test_scenario::next_tx(scenario, module_owner);
//             let expected_shared_objects = 1;
//             let expected_created_objects = 2;
//             assert_eq(
//                 vector::length(&test_scenario::created(&tx)),
//                 expected_created_objects
//             );
//             assert_eq(
//                 vector::length(&test_scenario::shared(&tx)),
//                 expected_shared_objects
//             );
//         };
//         test_scenario::end(scenario_val);
//     }

//     #[test]
//     fun test_create_vault_and_deposit() {
//         let module_owner = @0xa;
//         let mut scenario_val = test_scenario::begin(module_owner);
//         let scenario = &mut scenario_val;

//         {
//             init(test_scenario::ctx(scenario));
//         };

//         test_scenario::next_tx(scenario, module_owner);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             create_vault(&mut app, test_scenario::ctx(scenario));

//             let payment = coin::mint_for_testing<SUI>(100, test_scenario::ctx(scenario));
//             deposit_to_vault(&mut app, payment, test_scenario::ctx(scenario));

//             let (balance, locked) = get_vault_balance(&app, module_owner);
//             assert_eq(balance, 100);
//             assert_eq(locked, 0);

//             test_scenario::return_shared(app);
//         };

//         test_scenario::end(scenario_val);
//     }

//     #[test]
//     fun test_withdraw_from_vault() {
//         let module_owner = @0xa;
//         let mut scenario_val = test_scenario::begin(module_owner);
//         let scenario = &mut scenario_val;

//         {
//             init(test_scenario::ctx(scenario));let mut app = test_scenario::take_shared<LockUp>(scenario);
//             create_vault(&mut app, test_scenario::ctx(scenario));

//             let payment = coin::mint_for_testing<SUI>(100, test_scenario::ctx(scenario));
//             deposit_to_vault(&mut app, payment, test_scenario::ctx(scenario));

//             test_scenario::return_shared(app);
//         };

//         test_scenario::next_tx(scenario, module_owner);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);

//             withdraw_from_vault(&mut app, 50, test_scenario::ctx(scenario));

//             let (balance, locked) = get_vault_balance(&app, module_owner);
//             assert_eq(balance, 50);
//             assert_eq(locked, 0);

//             test_scenario::return_shared(app);
//         };

//         test_scenario::end(scenario_val);
//     }

//     #[test]
//     fun test_create_and_complete_cross_border_payment() {
//         let module_owner = @0xa;
//         let receiver = @0xb;
//         let sender_intermediary = @0xc;
//         let mut scenario_val = test_scenario::begin(module_owner);
//         let scenario = &mut scenario_val;

//         {
//             init(test_scenario::ctx(scenario));
//         };

//         test_scenario::next_tx(scenario, module_owner);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             create_vault(&mut app, test_scenario::ctx(scenario));

//             let payment = coin::mint_for_testing<SUI>(100, test_scenario::ctx(scenario));
//             deposit_to_vault(&mut app, payment, test_scenario::ctx(scenario));

//             let mut clock = clock::create_for_testing(test_scenario::ctx(scenario));
//             clock::set_for_testing(&mut clock, 5000);

//             create_cross_border_payment(
//                 &mut app,
//                 &clock,
//                 10000,
//                 b"NGN",
//                 70000,
//                 b"USD",
//                 30,
//                 receiver,
//                 test_scenario::ctx(scenario)
//             );

//             let (balance, locked) = get_vault_balance(&app, module_owner);
//             assert_eq(balance, 100);
//             assert_eq(locked, 30);

//             clock::destroy_for_testing(clock);
//             test_scenario::return_shared(app);
//         };

//         test_scenario::next_tx(scenario, receiver);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             create_vault(&mut app, test_scenario::ctx(scenario));

//             let payment = coin::mint_for_testing<SUI>(100, test_scenario::ctx(scenario));
//             deposit_to_vault(&mut app, payment, test_scenario::ctx(scenario));

//             test_scenario::return_shared(app);
//         };

//         test_scenario::next_tx(scenario, sender_intermediary);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             create_vault(&mut app, test_scenario::ctx(scenario));

//             let payment = coin::mint_for_testing<SUI>(100, test_scenario::ctx(scenario));
//             deposit_to_vault(&mut app, payment, test_scenario::ctx(scenario));

//             sender_accept_cbp(&mut app, 0, test_scenario::ctx(scenario));

//             test_scenario::return_shared(app);
//         };

//         test_scenario::next_tx(scenario, module_owner);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             let mut clock = clock::create_for_testing(test_scenario::ctx(scenario));
//             clock::set_for_testing(&mut clock, 6000);

//             confirm_sent_payment(&mut app, 0, &clock, test_scenario::ctx(scenario));

//             test_scenario::return_shared(app);
//             clock::destroy_for_testing(clock);
//         };

//         test_scenario::next_tx(scenario, receiver);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             let mut clock = clock::create_for_testing(test_scenario::ctx(scenario));
//             clock::set_for_testing(&mut clock, 7000);

//             confirm_received_payment(&mut app, 0, &clock, test_scenario::ctx(scenario));

//             test_scenario::return_shared(app);
//             clock::destroy_for_testing(clock);
//         };

//         test_scenario::next_tx(scenario, sender_intermediary);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             let mut clock = clock::create_for_testing(test_scenario::ctx(scenario));
//             clock::set_for_testing(&mut clock, 8000);

//             confirm_outgoing_sent_payment(&mut app, 0, &clock, test_scenario::ctx(scenario));

//             test_scenario::return_shared(app);
//             clock::destroy_for_testing(clock);
//         };

//         test_scenario::next_tx(scenario, module_owner);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             let mut clock = clock::create_for_testing(test_scenario::ctx(scenario));
//             clock::set_for_testing(&mut clock, 9000);

//             confirm_outgoing_received_payment(&mut app, 0, &clock, test_scenario::ctx(scenario));

//             let cbp = get_cbp(&app, 0);
//             assert!(cbp.completed, ErrNotCompleted);

//             test_scenario::return_shared(app);
//             clock::destroy_for_testing(clock);
//         };

//         test_scenario::next_tx(scenario, module_owner);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             release_sui_after_transaction(&mut app, 0, test_scenario::ctx(scenario));

//             // Check vault balances after transaction
//             let (owner_balance, owner_locked) = get_vault_balance(&app, module_owner);
//             let (sender_balance, _) = get_vault_balance(&app, sender_intermediary);

//             // Verify the funds are released and transferred correctly (minus the fee)
//             assert_eq(owner_locked, 0); // No longer locked
//             assert!(owner_balance < 100); // Some SUI was transferred out
//             assert!(sender_balance > 100); // Received payment

//             // Check fee balance
//             assert!(balance::value(&app.fee_balance) > 0); // Fee was collected

//             test_scenario::return_shared(app);
//         };

//         test_scenario::end(scenario_val);
//     }

//     #[test]
//     fun test_cancel_transaction() {
//         let module_owner = @0xa;
//         let receiver = @0xb;
//         let mut scenario_val = test_scenario::begin(module_owner);
//         let scenario = &mut scenario_val;

//         {
//             init(test_scenario::ctx(scenario));
//         };

//         test_scenario::next_tx(scenario, module_owner);

//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             create_vault(&mut app, test_scenario::ctx(scenario));

//             let payment = coin::mint_for_testing<SUI>(100, test_scenario::ctx(scenario));
//             deposit_to_vault(&mut app, payment, test_scenario::ctx(scenario));

//             let mut clock = clock::create_for_testing(test_scenario::ctx(scenario));
//             clock::set_for_testing(&mut clock, 5000);

//             create_cross_border_payment(
//                 &mut app,
//                 &clock,
//                 10000,
//                 b"NGN",
//                 70000,
//                 b"USD",
//                 30,
//                 receiver,
//                 test_scenario::ctx(scenario)
//             );

//             let (balance, locked) = get_vault_balance(&app, module_owner);
//             assert_eq(balance, 100);
//             assert_eq(locked, 30);

//             // Cancel the transaction
//             cancel_transaction(&mut app, 0, test_scenario::ctx(scenario));

//             // Verify the funds are no longer locked
//             let (balance_after, locked_after) = get_vault_balance(&app, module_owner);
//             assert_eq(balance_after, 100);
//             assert_eq(locked_after, 0);

//             // Verify the transaction is marked as failed
//             let cbp = get_cbp(&app, 0);
//             assert!(cbp.failed, 0);

//             clock::destroy_for_testing(clock);
//             test_scenario::return_shared(app);
//         };

//         test_scenario::end(scenario_val);
//     }

//     #[test]
//     fun test_admin_functions() {
//         let module_owner = @0xa;
//         let mut scenario_val = test_scenario::begin(module_owner);
//         let scenario = &mut scenario_val;

//         // Initialize app
//         {
//             init(test_scenario::ctx(scenario));
//         };

//         test_scenario::next_tx(scenario, module_owner);

//         // Set up app with fees
//         {
//             let mut app = test_scenario::take_shared<LockUp>(scenario);
//             let cap = test_scenario::take_from_sender<AdminCap>(scenario);

//             // Update fee percentage to 1% (1000 basis points)
//             update_fee_percentage(&mut app, &cap, 1000);
//             assert_eq(app.fee_percentage, 1000);

//             // Add some fees to the fee balance
//             let fee_payment = coin::mint_for_testing<SUI>(50, test_scenario::ctx(scenario));
//             let fee_balance = coin::into_balance(fee_payment);
//             balance::join(&mut app.fee_balance, fee_balance);

//             // Withdraw fees
//             withdraw_fees(&mut app, &cap, 20, test_scenario::ctx(scenario));
//             assert_eq(balance::value(&app.fee_balance), 30);

//             test_scenario::return_to_sender(scenario, cap);
//             test_scenario::return_shared(app);
//         };

//         test_scenario::end(scenario_val);
//     }

// }
