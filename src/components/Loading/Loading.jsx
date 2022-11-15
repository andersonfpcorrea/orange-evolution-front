import style from "./Loading.module.css";

function Loading({ className }) {
  return (
    <div className={className}>
      <div className={style["lds-default"]}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
