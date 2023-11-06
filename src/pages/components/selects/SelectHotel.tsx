import MyForm from '@/components/core/form';
import { loaiGiayToOption } from '@/const/options';

const SelectHotels = ({ ...props }) => {
  return (
    <>
      <MyForm.Item
        innerProps={{
          placeholder: 'Vui lòng chọn',
          // display: 'block'
        }}
        style={{ display: 'block' }}
        options={loaiGiayToOption}
        label="Điểm đến"
        {...props}
        name="typePaper"
        // name={[name, 'typePaper']}
        className='type-paper'
        type="select"
        rules={[
            {
              required: true,
              message: 'Vui lòng chọn điểm đến',
            },
          ]}
      />
    </>
  );
};

export default SelectHotels;