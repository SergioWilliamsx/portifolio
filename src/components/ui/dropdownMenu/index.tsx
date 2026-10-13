"use client"

import { Menu } from "@base-ui/react/menu"
import styles from "./styles.module.css"

interface SkillsDropdownProps {
  items: string[]
  value: string
  onValueChange: (value: string) => void
}

export function SkillsDropdown({ items, value, onValueChange }: SkillsDropdownProps) {
  return (
    <Menu.Root>
      <Menu.Trigger className={styles.trigger}>{value}</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className={styles.positioner} sideOffset={6}>
          <Menu.Popup className={styles.popup}>
            {items.map((item) => (
              <Menu.Item
                key={item}
                className={styles.item}
                onClick={() => onValueChange(item)}
              >
                {item}
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
