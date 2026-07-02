import type { ReactNode } from "react";

export type IconName =
  | "analysis"
  | "baseline"
  | "close"
  | "config"
  | "data"
  | "docs"
  | "equilibrium"
  | "generators"
  | "info"
  | "jobs"
  | "kpis"
  | "menu"
  | "notification"
  | "overview"
  | "results"
  | "search"
  | "simulations"
  | "social_media";

const ICON_PATHS: Record<IconName, string> = {
  overview: "M4 13.5h7.5V4H4v9.5Zm0 6.5h7.5v-4H4v4Zm10 0h6v-9h-6v9Zm0-11.5h6V4h-6v4.5Z",
  close: "M6.28 5 12 10.72 17.72 5 19 6.28 13.28 12 19 17.72 17.72 19 12 13.28 6.28 19 5 17.72 10.72 12 5 6.28 6.28 5Z",
  docs: "M6 3.5h8l4 4V20H6V3.5Zm7.25 1.75V8.5h3.25L13.25 5.25ZM8.5 11h7v1.5h-7V11Zm0 3h7v1.5h-7V14Zm0 3h5v1.5h-5V17Z",
  config: "M12 2.75 14.1 6l3.8.85-.35 3.9 2.45 3-3.1 2.35.15 3.9-3.75-1.05L10 21.25l-2.1-3.25-3.8-.85.35-3.9-2.45-3 3.1-2.35-.15-3.9 3.75 1.05L12 2.75Zm0 6.25a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  data: "M4 5.25C4 3.45 7.55 2 12 2s8 1.45 8 3.25v13.5C20 20.55 16.45 22 12 22s-8-1.45-8-3.25V5.25Zm2 4.15v2.85c1.3.9 3.5 1.5 6 1.5s4.7-.6 6-1.5V9.4c-1.45.7-3.55 1.1-6 1.1s-4.55-.4-6-1.1Zm0 6v3.35c.4.55 2.55 1.75 6 1.75s5.6-1.2 6-1.75V15.4c-1.45.7-3.55 1.1-6 1.1s-4.55-.4-6-1.1Z",
  generators: "M5 4h7a4 4 0 0 1 4 4v1h3l-4.25 4.25L10.5 9H14V8a2 2 0 0 0-2-2H5V4Zm14 16h-7a4 4 0 0 1-4-4v-1H5l4.25-4.25L13.5 15H10v1a2 2 0 0 0 2 2h7v2Z",
  simulations: "M5 5.5A2.5 2.5 0 1 1 7.5 8H7v3.25l4 2.35V10h2v3.6l4-2.35V8h-.5A2.5 2.5 0 1 1 19 5.5 2.5 2.5 0 0 1 17.05 8H19v4.4l-6 3.55V16.5h3.5a2.5 2.5 0 1 1 0 2H7.5a2.5 2.5 0 1 1 0-2H11v-.55l-6-3.55V8h1.95A2.5 2.5 0 0 1 5 5.5Z",
  analysis: "M4 19h16v2H4v-2Zm1-2V9h3v8H5Zm5 0V4h3v13h-3Zm5 0v-6h3v6h-3Z",
  results: "M5 4h14v16H5V4Zm2 2v12h10V6H7Zm1.5 8h2v2h-2v-2Zm3.25-4h2v6h-2v-6Zm3.25-2h2v8h-2V8Z",
  jobs: "M5 4h14v4H5V4Zm0 6h14v4H5v-4Zm0 6h14v4H5v-4Zm2-10.5V6h2v-.5H7Zm0 6V12h2v-.5H7Zm0 6V18h2v-.5H7Z",
  menu: "M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z",
  info: "M12 2.75a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5Zm-1 7.5V17h2v-6.75h-2ZM11 7v2h2V7h-2Z",
  search: "M10.5 4a6.5 6.5 0 0 1 5.1 10.54l4.18 4.18-1.42 1.42-4.18-4.18A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z",
  social_media: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92Z",
  kpis: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Zm0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8A8 8 0 0 1 4 12 8 8 0 0 1 12 4Zm-.5 2v6.25l5.25 3.15.75-1.23-4.5-2.67V6h-1.5Z",
  baseline: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2Z",
  equilibrium: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2Zm0 15-5-2.18L7 18V5h10v13Z",
  notification: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2Z",
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

export function PageInfoButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" className="page-info-button" aria-label={label} title={label} onClick={onClick}>
      <Icon name="info" />
    </button>
  );
}

export function GuideButton({
  label = "Guide",
  icon = "search",
  onClick,
}: {
  label?: string;
  icon?: IconName;
  onClick: () => void;
}) {
  return (
    <button type="button" className="secondary-button guide-button" onClick={onClick}>
      <Icon name={icon} />
      <span>{label}</span>
    </button>
  );
}

export function TitleWithInfo({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <span className="title-with-info">
      {children}
      <PageInfoButton label={label} onClick={onClick} />
    </span>
  );
}
