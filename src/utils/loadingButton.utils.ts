const loadingButton = ({ buttonId, isLoading }: { buttonId: string; isLoading: boolean }): void => {
  const submitBtnElem = document.getElementById(buttonId) as HTMLButtonElement;

  submitBtnElem?.setAttribute('aria-busy', `${isLoading}`);
  submitBtnElem?.setAttribute('aria-disable', `${isLoading}`);
};

export default loadingButton;
