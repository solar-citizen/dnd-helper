import { CustomButton, CustomButtonProps } from './index'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

export interface CustomLoaderButtonProps extends CustomButtonProps {
  isLoading: boolean
}

export const CustomLoaderButton = forwardRef<HTMLButtonElement, CustomLoaderButtonProps>(
  (props: CustomLoaderButtonProps, ref) => (
    <CustomButton
      ref={ref}
      className={props.className}
      title={props.title}
      altTitle={props.altTitle}
      showAltTitle={props.isLoading}
      disabled={props.isLoading}
      onClick={props.onClick}
    >
      {props.isLoading ? (
        <>
          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          <span>{props.altTitle}</span>
        </>
      ) : (
        <span>{props.title}</span>
      )}
    </CustomButton>
  ),
)
