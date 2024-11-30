#[allow(unused_field, unused_use)]
module lockup::lockup{

  use sui::coin::{Self,Coin};
  use std::debug::print;
  use std::string;

  #[test_only]
  use sui::test_scenario;
  #[test_only]
  use sui::test_utils::assert_eq;


  public struct LockUp has key {
      id: UID,
      transactions: vector<Transaction>,
  }
  

  public struct Transaction has store {
          id: ID,
          creator: address,   
          merchant:Option<address>,
          started:u64,
          finished:u64,
          currency:vector<u64>,
          amount_in_fiat:u64,
          amount_in_sui:u64,
          completed:bool,
      }

      fun init(ctx: &mut TxContext) {
        let app = LockUp {
            id: object::new(ctx),
            transactions: vector::empty<Transaction>(),
        };
        transfer::share_object(app);
    }



      #[test]
    fun test_init_success() {
        let module_owner = @0xa;
        let mut scenario_val = test_scenario::begin(module_owner);
        let scenario = &mut scenario_val;
        {
            init(test_scenario::ctx(scenario));
            let tx = test_scenario::next_tx(scenario, module_owner);
            let expected_shared_objects = 1;
            let expected_created_objects = 1;
            assert_eq(
                vector::length(&test_scenario::created(&tx)),
                expected_created_objects
            );
            assert_eq(
                vector::length(&test_scenario::shared(&tx)),
                expected_shared_objects
            );
            print(&string::utf8(b"this is awesome"))
        };
     
        test_scenario::end(scenario_val);
    }



    


}
