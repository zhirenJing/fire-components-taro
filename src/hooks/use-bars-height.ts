import Taro from "@tarojs/taro"

const TAB_BAR_IOS_LOGIC_HEIGHT = 48;
const TAB_BAR_ANDROID_LOGIC_HEIGHT = 54;

const getProbablyStatusBarHeight = () => {
  return 0;
}

const isiOS = (system: string) => {
  return system.indexOf('iOS') !== -1
}

const calcViewHeight = (screenHeight, windowHeight, statusBarHeight, navigationBarHeight, toolBarHeight) => {
  const outsideWindowHeight = screenHeight - windowHeight
  if (outsideWindowHeight === 0 || outsideWindowHeight === statusBarHeight + navigationBarHeight) {
    return screenHeight - toolBarHeight - navigationBarHeight - statusBarHeight
  }
  if (outsideWindowHeight - statusBarHeight - navigationBarHeight - toolBarHeight < 0) {
    return windowHeight - statusBarHeight - navigationBarHeight
  }
  return windowHeight;
}

export const useBarsHeight = () => {
  const { safeArea, windowHeight, screenHeight, statusBarHeight: originStatusBarHeight, system, } = Taro.getSystemInfoSync()

  const tabBarLogicHeight = isiOS(system) ? TAB_BAR_IOS_LOGIC_HEIGHT : TAB_BAR_ANDROID_LOGIC_HEIGHT;


  const statusBarHeight = originStatusBarHeight || getProbablyStatusBarHeight()
  const menuButtonRect = Taro.getMenuButtonBoundingClientRect()

  const navigationBarHeight = (menuButtonRect.top - statusBarHeight) * 2 + menuButtonRect.height;

  // safeArea 获取不到 toolBarHeight 按 0 处理
  const toolBarHeight = safeArea ? screenHeight - safeArea.bottom : 0;

  const viewHeight = calcViewHeight(screenHeight, windowHeight, statusBarHeight, navigationBarHeight, toolBarHeight);

  return (
    {
      statusBarHeight,
      toolBarHeight,
      navigationBarHeight,
      navigationBarContentPadding: menuButtonRect.right,
      viewHeight,
      tabBarHeight: tabBarLogicHeight,
    }
  )
}

