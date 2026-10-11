export type ProductCategory = 
  | 'All Items'
  | 'Branding & Setup'
  | 'Tea Preparation'
  | 'Serving Items'
  | 'Kitchen Equipments'
  | 'Furniture';

export interface ProductItem {
  id: number;
  name: string;
  specs: string;
  category: ProductCategory;
  image: string;
  quantity?: string;
  description?: string;
}

export interface EnquiryFormData {
  fullName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  city: string;
  state: string;
  hasShop: string;
  message: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
