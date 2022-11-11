import InputSelect from '../InputSelect/InputSelect';
import InputText from '../InputText/InputText';

function EditProfile() {
  return (
    <form className='h-[35rem] flex flex-col gap-8'>
      <div className='flex gap-16'>
        <InputText
          type='text'
          label='Nome'
          placeholder='Lia'
          id='nome'
          className={'grow-1'}
        />
        <InputText
          type='text'
          label='Sobrenome'
          placeholder='Sousa'
          id='sobrenome'
          className={'grow-1'}
        />
      </div>
      <InputText type='email' label='E-mail' placeholder='liasouza@email.com' />
      <InputText type='password' label='Senha' placeholder='liasouza123' />
      <InputSelect label={'Sua trilha'} />
    </form>
  );
}

export default EditProfile;
