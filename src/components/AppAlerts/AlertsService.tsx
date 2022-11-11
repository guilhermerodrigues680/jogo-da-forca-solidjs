// /* @refresh reload */
// import { render } from "solid-js/web";
// import AppAlerts from "./AppAlerts";

// class AlertsService {
//   private readonly alertsEl: HTMLElement;

//   constructor() {
//     this.alertsEl = document.createElement("div");
//   }

//   public showAlert(message: string): void {
//     document.body.appendChild(this.alertsEl);
//     const dispose = render(
//       () => (
//         <AppAlerts
//           message={message}
//           onClose={() => {
//             console.debug("close dispose remove");
//             dispose();
//             this.alertsEl.remove();
//           }}
//         />
//       ),
//       this.alertsEl
//     );
//   }
// }

// const alertsService = new AlertsService();

// export { AlertsService, alertsService };

export {};
