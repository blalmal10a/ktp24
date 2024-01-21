import { Notify } from "quasar";
import { reactive, ref } from "vue";

const pwaApp = reactive({
  deferredPrompt: null,
  install,
});

function install() {
  if (pwaApp.deferredPrompt) {
    pwaApp.deferredPrompt.prompt();
    pwaApp.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      pwaApp.deferredPrompt = null;
    });
  } else {
    Notify.create("App installation failed");
    //tell user pwa installation is not possible
  }
}

export { pwaApp };
