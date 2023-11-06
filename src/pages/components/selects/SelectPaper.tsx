import MyForm from '@/components/core/form';
import { loaiGiayToOption } from '@/const/options';

const SelectTypePaper = ({ ...props }) => {
  return (
    <>
      <MyForm.Item
        innerProps={{
          placeholder: 'Vui lòng chọn',
        }}
        options={loaiGiayToOption}
        label="Loại giấy tờ"
        {...props}
        name="typePaper"
        // name={[name, 'typePaper']}
        className='type-paper'
        type="select"
        rules={[
            {
              required: true,
              message: 'Vui lòng chọn loại giấy tờ',
            },
          ]}
      />
    </>
  );
};

export default SelectTypePaper;
