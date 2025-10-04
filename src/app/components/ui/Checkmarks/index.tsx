import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export interface CheckmarksProps {
  checkmarks: string[];
}

export default function Checkmarks({ checkmarks }: CheckmarksProps) {
  return (
    <div className='sm:w-max'>
      {checkmarks.map((checkmark, index) => (
        <div
          key={index}
          className='flex items-center gap-4 border-b border-tertiary py-2'
        >
          <div>
            <IoMdCheckmarkCircleOutline
              color='var(--tertiary-color)'
              size={20}
            />
          </div>

          <p className='font-light'>{checkmark}</p>
        </div>
      ))}
    </div>
  );
}
