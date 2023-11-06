export const cutImage = (webcamRef:any, width: number, height: number) => {
    const webcamElement = webcamRef.current.video;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Tính toán kích thước vùng chụp ảnh (ví dụ: 200x150)
      const captureWidth = width;
      const captureHeight = height;
      const captureX = (webcamElement.videoWidth - captureWidth) / 2;
      const captureY = (webcamElement.videoHeight - captureHeight) / 2;

      canvas.width = captureWidth;
      canvas.height = captureHeight;
      context?.drawImage(
        webcamElement,
        captureX,
        captureY,
        captureWidth,
        captureHeight,
        0,
        0,
        captureWidth,
        captureHeight
      );
      return canvas.toDataURL('image/jpeg');
}