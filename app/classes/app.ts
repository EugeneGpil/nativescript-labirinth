import {android as androidApp} from "@nativescript/core/application";
import {device} from "@nativescript/core/platform";

declare var android: any;

export default class App {
  public static setImmersiveMode(): void {
    if (androidApp && device.sdkVersion >= '21') {
      const View = android.view.View
      const window = androidApp.startActivity.getWindow()
      const decorView = window.getDecorView()
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
        View.SYSTEM_UI_FLAG_FULLSCREEN |
        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      )
    }
  }
}