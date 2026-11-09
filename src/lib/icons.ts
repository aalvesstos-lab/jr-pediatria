import { Baby, BookOpen, ClipboardCheck, CalendarCheck, CircleHelp, Compass, Ear, Footprints, Heart, MapPin, MessageCircle, MessageCircleHeart, MousePointerClick, Route, Ruler, Send, Sprout, Stethoscope, type LucideIcon } from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope, sprout: Sprout, message: MessageCircleHeart, baby: Baby, footprints: Footprints, ruler: Ruler,
  calendar: CalendarCheck, pin: MapPin, send: Send, click: MousePointerClick, help: CircleHelp, whatsapp: MessageCircle, route: Route,
  ear: Ear, clipboard: ClipboardCheck, book: BookOpen, compass: Compass, heart: Heart,
}
