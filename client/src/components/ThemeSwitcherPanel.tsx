import { useState, useEffect } from 'react';
import { 
  getCurrentTheme, 
  setTheme, 
  getAvailableThemes,
  getThemeDetails,
  type ThemeScheme 
} from '@/lib/theme-switcher';
import { Palette, Check } from 'lucide-react';

export function ThemeSwitcherPanel() {
  const [currentTheme, setCurrentTheme] = useState<ThemeScheme>(getCurrentTheme());
  const [isOpen, setIsOpen] = useState(false);
  const themes = getAvailableThemes();

  const handleThemeChange = (theme: ThemeScheme) => {
    setTheme(theme);
    setCurrentTheme(theme);
  };

  useEffect(() => {
    setCurrentTheme(getCurrentTheme());
  }, []);

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
        title="Change Theme"
      >
        <Palette className="w-4 h-4" />
        <span className="text-xs font-medium">Theme</span>
      </button>

      {/* Theme Selector Panel */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm">Select Theme</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {themes.map((themeKey) => {
              const themeDetails = getThemeDetails(themeKey);
              const isActive = currentTheme === themeKey;
              
              return (
                <button
                  key={themeKey}
                  onClick={() => handleThemeChange(themeKey)}
                  className={`
                    relative p-3 rounded-lg border-2 transition-all text-left
                    ${isActive 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50 bg-card'
                    }
                  `}
                >
                  {/* Color Preview */}
                  <div className="flex gap-1 mb-2">
                    <div 
                      className="w-8 h-8 rounded"
                      style={{ backgroundColor: themeDetails.primary[500] }}
                    />
                    <div 
                      className="w-8 h-8 rounded"
                      style={{ backgroundColor: themeDetails.secondary[500] }}
                    />
                    <div 
                      className="w-8 h-8 rounded"
                      style={{ backgroundColor: themeDetails.accent[500] }}
                    />
                  </div>
                  
                  {/* Theme Name */}
                  <div className="text-xs font-medium mb-1">{themeDetails.name}</div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute top-2 right-2">
                      <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
