import { Component } from '@angular/core';
import ImageKit from 'imagekit-javascript';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  templateUrl: './image-upload.component.html'
})
export class ImageUploadComponent {
  imageKit = new ImageKit({
    publicKey: 'public_qS3/wS9xNZ4MGS8k5jB/UdWLFiw=',
    urlEndpoint: 'https://ik.imagekit.io/nspectree'
  });

  uploadProgress: number | null = null;
  imageUrl: string | null = null;
  apiUrl = 'http://localhost:3000/auth';

  async onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const authParams = await fetch(this.apiUrl).then(res => res.json());

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      // Using Promises
      this.imageKit.upload({
          file: file,
          fileName: "image1.jpg",
          tags: ["tag1"],
          token: authParams.token,
          signature: authParams.signature,
          expire: authParams.expire,
          extensions: [
              {
                  name: "aws-auto-tagging",
                  minConfidence: 80,
                  maxTags: 10
              }
          ],
          transformation: {
              pre: 'l-text,i-Imagekit,fs-50,l-end',
              post: [
                  {
                      type: 'transformation',
                      value: 'w-100'
                  }
              ]
          }
      }).then(result => {
          console.log(result);
      }).then(error => {
          console.log(error);
      })
    }
  }
}
