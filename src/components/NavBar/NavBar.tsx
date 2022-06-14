import { View } from "@tarojs/components";
import classnames from "classnames";
import React, { useMemo } from "react";
import { FireNavBarProps } from "../../../types/nav-bar";
import { useBarsHeight } from "../../hooks/use-bars-height";

const FireNavBar: React.FC<FireNavBarProps> = ({
  className,
  style,
  fixed = true,
  needStatus = true,
  zIndex = 1,
  children,
}) => {
  const { statusBarHeight } = useBarsHeight();

  const styleContainer = useMemo(() => {
    let result: any = {};
    if (needStatus) {
      result.paddingTop = statusBarHeight;

      if (typeof style === "object" && style?.backgroundColor) {
        result.backgroundColor = style.backgroundColor;
      }
    }
    if (fixed) result.zIndex = zIndex;
    return result;
  }, [needStatus, statusBarHeight, zIndex, fixed, style]);

  return (
    <View
      style={styleContainer}
      className={classnames(
        className,
        `fire_nav_bar-container${fixed ? "-fixed" : ""}`
      )}
    >
      <View className="fire_nav_bar-content">{children}</View>
    </View>
  );
};

export default FireNavBar;
