import { UserOutlined } from '@ant-design/icons';
import { message, Modal, Upload } from 'antd';
import { type RcFile, type UploadFile, type UploadProps } from 'antd/lib/upload';
import { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { getBase64 } from '../../../utils/get-base64';
import './avatar-upload-button.less';

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    void message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    void message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

export type AvatarUploadButtonProps = {
  onChange?: (file?: File) => void;
};

export function AvatarUploadButton({ onChange }: AvatarUploadButtonProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleUpload: UploadProps['customRequest'] = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess?.('ok');
    });
  };

  const handleCancel = () => {
    setPreviewOpen(false);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }

    setPreviewImage(file.url ?? file.preview!);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    onChange?.(newFileList[0].originFileObj);
    setFileList(newFileList);
  };

  const uploadButton = (
    <div className='rb-upload__button'>
      <UserOutlined />
      <div style={{ marginLeft: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <ImgCrop rotate>
        <Upload
          name='avatar'
          className='rb-upload'
          customRequest={handleUpload}
          listType='picture-card'
          fileList={fileList}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          onPreview={handlePreview}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </ImgCrop>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
}
