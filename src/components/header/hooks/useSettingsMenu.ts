import { useState } from "react";
import { IUseSettingsMenu } from "../interfaces";

const useSettingsMenu = (): IUseSettingsMenu => {
  const [anchorEl, setAnchorel] = useState<HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorel(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorel(null);
    };
    
    return {
        anchorEl,
        handleClick,
        handleClose
    }
};
export default useSettingsMenu;
