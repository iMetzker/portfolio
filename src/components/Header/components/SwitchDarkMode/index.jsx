import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { BiMoon } from "react-icons/bi";
import { GrSun } from "react-icons/gr";

import "./styles.scss";

export function SwitchDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };


  return (
        <label>
        <Switch.Root
            checked={isDarkMode}
            onCheckedChange={handleThemeChange}
            className={`switch ${isDarkMode ? 'dark' : ''}`}
          >
              <Switch.Thumb className={`thumb ${isDarkMode ? 'dark' : ''}`}>
                  {isDarkMode ? <BiMoon /> : <GrSun />}
                  </Switch.Thumb>
          </Switch.Root>
        </label>
  );
};
