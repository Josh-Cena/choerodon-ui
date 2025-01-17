---
type: Data Entry
category: Components
cols: 1
title: ImageCrop
---

crop the image.

## When To Use

crop the image.

## API

| Property | Description | Type | Default |
| ----------- | -------------------- | -------------- | ----------------------------------------------------------- |
| aspect      | Aspect of crop area ,  width / height                       |  number              |  1 / 1         | 
| shape       | Shape of crop area,  'rect'  or  'round'                    |  string              |  'rect'        |
| grid        | Show grid of crop area (third-lines)                        |  boolean             |  false         |
| zoom        | Enable zoom for image                                       |  boolean             |  true          |
| rotate      | Enable rotate for image                                     |  boolean             |  false         |
| beforeCrop  | Called before modal open, if return  false , it'll not open |  (file: UploadFile, uploadFiles: UploadFile[]) => boolean            |                |
| modalTitle  | Title of modal                                              |  string              |  'Edit image'  |
| modalWidth  | Width of modal in pixels or percentages                     |  number  \|  string  |  800           |
| modalOk     | Text of confirm button of modal                             |  string              |  'OK'          |
| modalCancel | Text of cancel button of modal                              |  string              |  'Cancel'      |
| onCancel   | Called modal cancel |  onCancel?: () => void           |                |
| onOk  | Called modal cancel |  { url: string, blob: Blob,area:Area }=> void          |                |
| modalVisible   |  control the modal visibility |  boolean          |  ture               |
| serverCrop   | when use upload the crop info to server and naturl image blob |  boolean          |  false            |
| onCropComplete   | crop complete callback|({ url: string, blob: Blob, area: Area }) => void        |            |
| cropContent   | crop area render | (crop: ReactElement<EasyCropProps>) => React.ReactElement<any>      |            |
| modalProps   | modal props can't change the  onOk ， onCancel  | ModalProps     |            |


## ImgCrop.AvatarUploader 
This component can be used to upload avatar, and add the preview

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | The Modal can visibale| boolean | false |
| onClose | callback when the Modal close|   (visible: boolean) => void;  |   |
| onUploadOk | callback when upload the avatar|  (res: any) => void;  |   |
| uploadUrl | the upload url| string |   |
| uploadFaild | call back when the upload failed|  () => void;  |   |
| uploadError | call back when the server is error| (error: any) => void; |   |
| handleUpload | call back when click the save button|   (area: AvatarArea) => void;    |   |
| cropComplete | call back when crop the finished |  (imageState: any) => void;   |   |
| title | the title of avatar upload|  string \| React.ReactElement;   |   |
| subTitle | the sub title of avatar upload|  string \| React.ReactElement;  |   |
| previewTitle | the title of avatar preview|  string \| React.ReactElement;  |   |
| reloadTitle | the title of avatar reupload|  string \| React.ReactElement;  |   |
| uploadProps | config of upload|  UploadProps  |   |
| modalProps | config of modal|  ModalProps  |   |
| limit | limit of the type and size of the avatar| boolean |  {type: 'jpeg,png,jpg',size: 1024,}  |
| previewList | defined the preview list | number[] | \[80, 30, 18\] |
| editorWidth | crop width | number | 540 |
| editorHeight | crop height  | number | 300 |
| minRectSize | the minimum size of the crop area| number | 80 |
| defaultRectSize | the default size of the crop area| number | 200 |
| axiosConfig | the upload axios config | AxiosRequestConfig |   |

