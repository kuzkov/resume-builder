import { Button, Form } from 'antd';
import { Link } from 'react-router-dom';
import { FileOutlined } from '@ant-design/icons';
import { FormProvider, useForm } from 'react-hook-form';
import { defaultValues, type FormValues } from './default-form-values';
import { PersonalDetails, EmploymentHistory } from './subforms';
import { useEffect } from 'react';
import { useResumeUpdate } from './contexts/resume-context';
import './resume-form.less';

export function ResumeForm() {
  const setResume = useResumeUpdate();
  const methods = useForm<FormValues>({ defaultValues });

  useEffect(() => {
    const subscription = methods.watch((formValues) => {
      console.log('subscribe', formValues);
      setResume(formValues as FormValues);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <FormProvider {...methods}>
      <div className='rb-resume-form'>
        <Form className='rb-resume-form__ant-form' layout='vertical' autoComplete='off'>
          <PersonalDetails />
          <EmploymentHistory />
        </Form>

        <Link to='/app/preview' className='rb-resume-form__fab'>
          <Button type='primary' size='large' shape='round' style={{ display: 'inline-block' }}>
            Preview
            <FileOutlined />
          </Button>
        </Link>
      </div>
    </FormProvider>
  );
}
