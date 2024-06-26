import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FC, ReactNode } from 'react'
import { ISpell } from '@/interfaces/ISpell'
import { DialogClose } from '@radix-ui/react-dialog'

interface CustomDialogProps {
  title: string
  description?: string
  triggerButton: ReactNode
  submitButton: ReactNode
  formData: IEditableSpell
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface IEditableSpell extends Omit<ISpell, 'id'> {}

export const CustomDialog: FC<CustomDialogProps> = ({
  title,
  description,
  triggerButton,
  submitButton,
  formData,
  onInputChange,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              name='name'
              value={formData?.name}
              // defaultValue='Fireball'
              className='col-span-3'
              onChange={onInputChange}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='baseRank' className='text-right'>
              Base rank
            </Label>
            <Input
              id='baseRank'
              name='baseRank'
              value={formData?.baseRank}
              // defaultValue='3'
              className='col-span-3'
              onChange={onInputChange}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-right'>
              Description
            </Label>
            <Input
              id='description'
              name='description'
              value={formData?.description}
              // defaultValue='A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.'
              className='col-span-3'
              onChange={onInputChange}
            />
          </div>
        </div>
        <DialogClose asChild>{submitButton}</DialogClose>
      </DialogContent>
    </Dialog>
  )
}
