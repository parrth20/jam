import type { Meta, StoryObj } from '@storybook/react-vite'
import { OnboardingDialog } from '@/components/login/OnboardingDialog'

const meta: Meta<typeof OnboardingDialog> = {
  title: 'Page/Login/OnboardingDialog',
  component: OnboardingDialog,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof OnboardingDialog>

export const Default: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
}
