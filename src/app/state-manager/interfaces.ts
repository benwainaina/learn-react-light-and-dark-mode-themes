export type IAppThemeMode = "light" | "dark" | "pink" | "purple";

export interface IAppStore {
  /**
   * Other store properties can go here
   */

  /**
   * The mode which the application is currently in
   */
  currentMode: IAppThemeMode;
}
