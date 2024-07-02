import { Button } from '@/components/ui/button'
import { FC, ReactNode } from 'react'

export interface BaseButtonProps {
  className?: string
  title?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: ReactNode
}

export const BaseButton: FC<BaseButtonProps> = ({ className, title, children, type }) => (
  <Button className={className || 'btn-primary'} type={type || 'button'}>
    {!!children && children}
    {!children && <span>{title}</span>}
  </Button>
)
