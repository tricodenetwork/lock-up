const componentsToBeDeveloped = [
  {
    name: "WhiteBackGround",
    identifier:
      "Taking a look at the UI, you would observe that most of the text and modals are on a white background",
    todo: [
      "Create a reusable component for this. Make this responsive and modifiable.",
      "You can pass the width, height, border radius and drop shadow as props into the component.",
      "Also dont forget that this component would be a parent wrapper to children props being passed",
      "This is use to wrap around almost all the other components.",
    ],
    AsignedTo: "Ovodo",
    Completed: true,
  },
  {
    name: "TransactionNotification",
    identifier:
      "On the intermediary dashboards there is a little notification pop up at the top of the screen.",
    todo: [
      "Create a reusable component for this. Make this responsive and modifiable.",
      "This component contains a button component inside. so you would not be expected to create that. Find it or create it if it is not created",
      "Create props like header (New Transaction Request), description, inCurrency (SUI), inAmount, outCurrency(NGN), outAmount",
      "Make the section bold in the description as it is in the UI.",
      "Take into consideration the stroke, border radius and drop shadow in the component",
    ],
    AsignedTo: "Ovodo",
  },
  {
    name: "SelectComponent",
    identifier: "There are 3 select components inside the SendMoneyComponent",
    todo: [
      "Create a reusabel select component.",
      "This will have to take in some props like placeholder and an array with the select options.",
      "Factor in the fact that the select components for countries and banks also have flags and a green checkbox amongst the options and a search option inside.",
      "You can take cue from the select component in the tricode repo. This can help you understand the implementation better.",
      "Create an error state to make the border red and also display a little error message at the bottom. You can pass in an error prop to activate this.",
    ],
    AsignedTo: "",
  },
  {
    name: "SendMoneyComponent",
    identifier: "The second screen on the sender transaction details section.",
    todo: [
      "Create a SendMoneyComponent.",
      "Take note, it contains three SelectComponents, a receive/send amount, a yellow continue button, and a currency converter/ show fees at the top.",
      "I would suggest the talent that takes on the selectComponent also takes this to make it more seamless.",
    ],
    AsignedTo: "Ada",
  },
  {
    name: "Button",
    identifier: "Blue full width and small width buttons all over the UI",
    todo: [
      "Create a reusable Button Component.",
      "You can take in the width as props for easier styling options to adjust for full and small widths.",
      "Also take in a title as prop and also href or onclick.",
      "Take cue from the button component in the tricode repo for ideas.",
    ],
    AsignedTo: "Ovodo",
  },
  {
    name: "ModalComponent",
    identifier: "Sections where there is an overlay on the main screen",
    todo: [
      "Create a reusable Modal Component. This will house other components and elements.",
      "You can take in the width as props for easier styling options to adjust for full and small widths.",
      "Also take in a title as prop and also href or onclick.",
      "Take cue from the button component in the tricode repo for ideas.",
    ],
    AsignedTo: "Akorede",
  },
  {
    name: "NotificationItem.",
    identifier: "Each Item in the notication section",
    todo: [
      "Create a reusable NotificationItem Component.",
      "This should take in props like heading, description, date.",
      "Take note of the bottom border",
      "This should have a transparent background as it is in a WhiteBackground Component.",
    ],
    AsignedTo: "",
  },
  {
    name: "Navbar.",
    identifier: "Top Navbar in the menu",
    todo: [
      "Modify the current navbar appropriatley. use the correct fonts and spacings.",
      "Take note of the three sections. Logo, menulist, and right menu.",
      "Please try and develope for mobile screen as well to improve responsiveness.",
    ],
    AsignedTo: "Ovodo",
  },
  {
    name: "StatsCard.",
    identifier: "In the first screen on the intermediary sender's dashboard.",
    todo: [
      "Create a reusable stats card component.",
      "It should take in props like iconColor, Iconsrc, title, amount",
      "Please try and develope for mobile screen as well to improve responsiveness.",
      "Take note this should be wrapped in a WhiteBackground Component",
    ],
    AsignedTo: "This has been done",
  },
  {
    name: "Footer.",
    identifier: "Bottom section on the landing page",
    todo: ["Create a reusable Footer component."],
    AsignedTo: "Ada",
  },
];
