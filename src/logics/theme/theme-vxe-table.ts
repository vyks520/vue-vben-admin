import { APP_PRESET_COLOR_LIST } from '/@/settings/designSetting';
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils';
import { useRootSetting } from '/@/hooks/setting/useRootSetting';
import { computed } from 'vue';
import { ThemeEnum } from '/@/enums/appEnum';
import { useAppStore } from '/@/store/modules/app';
import { watch } from 'vue';

function getThemeName(color?: string): string {
  let themeName = 'theme-dark';
  if (!color) return themeName;
  for (let i = 0; i < APP_PRESET_COLOR_LIST.length; i++) {
    if (APP_PRESET_COLOR_LIST[i] === color) {
      themeName = `theme-${i}`;
      break;
    }
  }
  return themeName;
}

export function watchChangeTheme() {
  const appStore = useAppStore();
  const { getDarkMode } = useRootSetting();
  const isDark = computed(() => getDarkMode.value === ThemeEnum.DARK);
  watch(
    () => [isDark.value, appStore.getProjectConfig.themeColor],
    () => {
      toggleTheme({
        scopeName: getThemeName(isDark.value ? undefined : appStore.getProjectConfig.themeColor),
      });
    },
    { immediate: true },
  );
}
