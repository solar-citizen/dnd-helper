'use client'
import { FC, useState } from 'react'
import SpellList from './SpellList'
import { CustomLoaderButton, CustomButton } from '../components/Button/index'
import { CustomDialog, IEditableSpell } from '../components/CustomDialog'
import { ISpell } from '@/interfaces/ISpell'
import EventEmitter from 'events'

const ADD_SPELL = 'Add Spell' // toDo: add constants file
const DIALOG_DESCRIPTION = 'Add new custom spell. Please fill all necessarry fields.' // toDo: add constants file

const Spells: FC = () => {
  const [isAddingInProgress, setIsAddingInProgress] = useState<boolean>(false)
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false)
  const baseSpellData = { name: '', baseRank: 1, description: '' }
  const [spellData, setSpellData] = useState<IEditableSpell>(baseSpellData)

  const onSpellAddHandler = () => {
    setIsDialogVisible((prevState: boolean) => !prevState)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSpellData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmitHandler = (data: IEditableSpell) => {
    console.log(spellData)
    setSpellData(baseSpellData)
  }

  return (
    <main>
      <h2>Spells</h2>
      <CustomDialog
        title={ADD_SPELL}
        description={DIALOG_DESCRIPTION}
        formData={spellData}
        onInputChange={handleInputChange}
        triggerButton={
          <CustomLoaderButton
            title={ADD_SPELL}
            altTitle='Adding...'
            isLoading={isAddingInProgress}
            onClick={onSpellAddHandler}
          />
        }
        submitButton={<CustomButton type='submit' title='Save Changes' onClick={() => onSubmitHandler(spellData)} />}
      />
      <SpellList />
    </main>
  )
}

export default Spells
