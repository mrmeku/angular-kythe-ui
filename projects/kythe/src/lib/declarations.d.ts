export interface KytheOffset {
  byte_offset: number
  line_number: number
  column_offset?: number
}

export interface KytheSpan {
  start: KytheOffset
  end: KytheOffset
}

export interface KytheReference {
  target_ticket: string
  kind: string
  span: KytheSpan
}

export interface KytheLocation {
  ticket: string
}

export interface KytheDecoration {
  location: KytheLocation
  source_text: string
  reference: KytheReference[]
}
