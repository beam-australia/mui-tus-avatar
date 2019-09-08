import tus from "tus-js-client";

function upload(blob, endpoint) {
  return new Promise((resolve, reject) => {
    const upload = new tus.Upload(blob, {
      endpoint,
      retryDelays: [0, 3000, 5000, 8000],
      resume: false,
      metadata: {
        filename: blob.name,
        filetype: blob.type
      },
      onError: error => {
        reject(error);
      },
      onSuccess: () => {
        resolve(upload.url);
      }
    });
    upload.start();
  });
}

export default upload;
