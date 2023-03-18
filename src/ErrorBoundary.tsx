import type {ErrorInfo, ReactNode} from 'react'
import React from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(_: Error): State {
    return {hasError: true}
  }

  constructor(props: Props) {
    super(props)
    this.state = {hasError: false}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError)
      return <h1>Something went wrong.</h1>

    return this.props.children
  }
}

export default ErrorBoundary
