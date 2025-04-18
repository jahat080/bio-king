'use client';
import { useThemeStore } from '@/store';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { themes } from '@/config/thems';
import { Check } from 'lucide-react';

const FooterStyle = () => {
  const { theme: mode } = useTheme();
  const {
    theme: config,
    setTheme: setConfig,
    footerType,
    setFooterType,
  } = useThemeStore();
  const newTheme = themes.find((theme) => theme.name === config);
  const handleChange = (event: any) => {
    setFooterType(event.target.value);
  };

  return (
    <div
      style={
        {
          '--theme-primary': `hsl(${
            newTheme?.cssVars[mode === 'dark' ? 'dark' : 'light'].primary
          })`,
        } as React.CSSProperties
      }
    >
      <div className='relative mb-3 inline-block rounded px-3 py-[3px] text-xs font-medium text-[--theme-primary] before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded before:bg-[--theme-primary] before:opacity-10'>
        Footer Type
      </div>
      <div className='flex flex-wrap items-center gap-3'>
        {['sticky', 'static', 'hidden'].map((value, index) => (
          <label
            htmlFor={`nav-type-${index}`}
            key={`nav-type-${index}`}
            className='flex cursor-pointer items-center gap-2'
          >
            <input
              type='radio'
              id={`nav-type-${index}`}
              value={value}
              checked={footerType === value}
              className='hidden'
              onChange={handleChange}
            />
            <div
              className={cn(
                'flex h-4 w-4 items-center justify-center rounded-full border border-default-400',
                {
                  'bg-primary': footerType === value,
                },
              )}
            >
              {footerType === value && (
                <Check className='h-3 w-3 text-primary-foreground' />
              )}
            </div>
            <span className='text-sm capitalize text-default-500'>{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FooterStyle;
