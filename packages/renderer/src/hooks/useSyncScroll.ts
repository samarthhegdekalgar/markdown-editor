import { useEffect } from "react";

export const useSyncScroll = (): void => {

  useEffect(() => {
    let isSyncingLeftScroll = false;
    let isSyncingRightScroll = false;
    const leftDiv = document.getElementsByClassName("cm-scroller")[0];
    const rightDiv = document.getElementById("preview-area");

    if(leftDiv && rightDiv) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      leftDiv.childNodes.item(0).style.height = rightDiv.scrollHeight + 'px';
    }
    const handleLeftScroll = () => {
      if(isSyncingLeftScroll || !leftDiv || !rightDiv) return;
      const totalLeftScrollableHeight = leftDiv.scrollHeight - leftDiv.clientHeight;
      const totalRightScrollableHeight = rightDiv.scrollHeight - rightDiv.clientHeight;

      const leftScrolledPercentage = leftDiv.scrollTop/totalLeftScrollableHeight*100

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const needToScrollRight = leftScrolledPercentage/100 * totalRightScrollableHeight

      isSyncingRightScroll = true;
      rightDiv.scrollTop = leftDiv.scrollTop;
      isSyncingRightScroll = false;
    }

    const handleRightScroll = () => {
      if(isSyncingRightScroll || !leftDiv || !rightDiv) return;
      const totalRightScrollableHeight = rightDiv.scrollHeight - rightDiv.clientHeight;

      const rightScrolledPercentage = rightDiv.scrollTop/totalRightScrollableHeight*100

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const needToScrollRight = rightScrolledPercentage/100 * totalRightScrollableHeight

      isSyncingLeftScroll = true;
      leftDiv.scrollTop = rightDiv.scrollTop;
      isSyncingLeftScroll = false;
    }

    leftDiv?.addEventListener('scroll', handleLeftScroll);
    rightDiv?.addEventListener('scroll', handleRightScroll);

    return () => {
      leftDiv?.removeEventListener('scroll', handleLeftScroll);
      rightDiv?.removeEventListener('scroll', handleRightScroll);
    }
  }, [])
}
