import { ReactChild } from 'react'
import { IconType } from 'react-icons'

export interface LeftSectionRow {
  title: string
  value: ReactChild
  link?: string
  icon: IconType
}

export interface LeftColumnSection {
  title: string
  items: LeftSectionRow[]
}

interface LeftColumnInfo {
  sections: LeftColumnSection[]
}

export interface DatesType {
  from: string
  to?: string
}

export interface RightSectionRow {
  dates?: DatesType
  title: string
  description?: ReactChild
  notes?: string
  hidden?: boolean
}

export interface RightColumnSection {
  title: string
  icon: IconType
  items: RightSectionRow[]
}

interface RightColumnInfo {
  title: string
  subtitle: string
  sections: RightColumnSection[]
}

export interface InfoType {
  leftColumn: LeftColumnInfo
  rightColumn: RightColumnInfo
}
