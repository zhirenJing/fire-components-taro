import { View } from "@tarojs/components";
import classnames from "classnames";
import React from "react";
import { useBarsHeight } from "../../hooks/use-bars-height";
import type { FireTabBarProps } from "../../../types/tab-bar";

const FireTabBar: React.FC<FireTabBarProps> = ({
  children,
  className,
  style,
  needToolBar,
}) => {
  const { tabBarHeight, toolBarHeight } = useBarsHeight();
  return (
    <View className={classnames("fire_tab_bar-container")}>
      <View
        style={{
          height: style?.height || tabBarHeight,
          paddingBottom: needToolBar ? toolBarHeight : 0,
        }}
        className={classnames("fire_tab_bar-placeholder")}
      ></View>
      <View
        style={{
          paddingBottom: needToolBar ? toolBarHeight : 0,
          ...style,
        }}
        className={classnames("fire_tab_bar-content-container", className)}
      >
        <View
          style={{
            height: style?.height || tabBarHeight,
          }}
          className={classnames("fire_tab_bar-content")}
        >
          {children}
        </View>
      </View>
    </View>
  );
};

export default FireTabBar;
