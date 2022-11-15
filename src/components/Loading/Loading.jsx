import style from "./Loading.module.css";

function Loading({ className }) {
  return (
    <div className={`${style["lds-default"]} ${className}`}>
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
  );
}

export default Loading;
