import { Button } from '@/components/ui/button'
import { Ref, ButtonHTMLAttributes, ReactNode, forwardRef, ForwardRefRenderFunction } from 'react'

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  title: string
  altTitle?: string
  showAltTitle?: boolean
  disabled?: boolean
  children?: ReactNode
  onClick: () => void
  ref?: Ref<HTMLButtonElement>
}

const CustomButton: ForwardRefRenderFunction<HTMLButtonElement, CustomButtonProps> = (
  { className, title, altTitle, showAltTitle, disabled, children, onClick },
  ref,
) => (
  <Button ref={ref} className={className || 'btn-primary'} disabled={disabled} onClick={onClick}>
    {!!children && children}
    {!children && (showAltTitle ? <span>{altTitle}</span> : <span>{title}</span>)}
  </Button>
)

export default forwardRef(CustomButton)
