import { css } from 'emotion';
import { GrafanaTheme } from '@grafana/data';
import { stylesFactory } from '@grafana/ui';

export const getStyles = stylesFactory((theme: GrafanaTheme) => ({
  inputLabel: css`
      align-items: center;
      background-color: ${theme.colors.bg3};
      border-radius: 3px 0 0 3px;
      color: ${theme.colors.text};
      display: flex;
      font-family: ${theme.typography.fontFamily.sansSerif};
      font-size: ${theme.typography.size.md};
      height: 100%;
      min-width: 80px;
      padding: 0 8px 0 12px;
    `,
}));
