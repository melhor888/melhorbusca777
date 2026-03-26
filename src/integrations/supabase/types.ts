export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          address: string | null
          city: string | null
          company_name: string | null
          created_at: string
          email: string
          featured_item_id: string | null
          full_name: string
          id: string
          logo_url: string | null
          phone: string | null
          seller_type: Database["public"]["Enums"]["seller_type"]
          show_location: boolean
          state: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string
          email: string
          featured_item_id?: string | null
          full_name: string
          id?: string
          logo_url?: string | null
          phone?: string | null
          seller_type?: Database["public"]["Enums"]["seller_type"]
          show_location?: boolean
          state?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string
          email?: string
          featured_item_id?: string | null
          full_name?: string
          id?: string
          logo_url?: string | null
          phone?: string | null
          seller_type?: Database["public"]["Enums"]["seller_type"]
          show_location?: boolean
          state?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_featured_item_id_fkey"
            columns: ["featured_item_id"]
            isOneToOne: false
            referencedRelation: "seller_items"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_items: {
        Row: {
          address: string | null
          area: number | null
          bathrooms: number | null
          bedrooms: number | null
          brand: string | null
          category: Database["public"]["Enums"]["item_category"]
          city: string | null
          color: string | null
          created_at: string
          description: string | null
          fuel: string | null
          id: string
          mileage: number | null
          model: string | null
          neighborhood: string | null
          parking_spots: number | null
          photos: string[] | null
          price: number | null
          seller_id: string
          seller_type: Database["public"]["Enums"]["seller_type"]
          state: string | null
          status: Database["public"]["Enums"]["item_status"]
          tags: Database["public"]["Enums"]["item_tag"][] | null
          title: string
          transmission: string | null
          updated_at: string
          user_id: string
          views_count: number | null
          year: number | null
        }
        Insert: {
          address?: string | null
          area?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          brand?: string | null
          category: Database["public"]["Enums"]["item_category"]
          city?: string | null
          color?: string | null
          created_at?: string
          description?: string | null
          fuel?: string | null
          id?: string
          mileage?: number | null
          model?: string | null
          neighborhood?: string | null
          parking_spots?: number | null
          photos?: string[] | null
          price?: number | null
          seller_id: string
          seller_type: Database["public"]["Enums"]["seller_type"]
          state?: string | null
          status?: Database["public"]["Enums"]["item_status"]
          tags?: Database["public"]["Enums"]["item_tag"][] | null
          title: string
          transmission?: string | null
          updated_at?: string
          user_id: string
          views_count?: number | null
          year?: number | null
        }
        Update: {
          address?: string | null
          area?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          brand?: string | null
          category?: Database["public"]["Enums"]["item_category"]
          city?: string | null
          color?: string | null
          created_at?: string
          description?: string | null
          fuel?: string | null
          id?: string
          mileage?: number | null
          model?: string | null
          neighborhood?: string | null
          parking_spots?: number | null
          photos?: string[] | null
          price?: number | null
          seller_id?: string
          seller_type?: Database["public"]["Enums"]["seller_type"]
          state?: string | null
          status?: Database["public"]["Enums"]["item_status"]
          tags?: Database["public"]["Enums"]["item_tag"][] | null
          title?: string
          transmission?: string | null
          updated_at?: string
          user_id?: string
          views_count?: number | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "seller_items_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      item_category:
        | "casa"
        | "apartamento"
        | "terreno"
        | "comercial"
        | "galpao"
        | "flat"
        | "aluguel"
        | "carro"
        | "moto"
        | "caminhao"
        | "van"
        | "utilitario"
        | "outros"
      item_status: "ativo" | "inativo"
      item_tag:
        | "premium"
        | "luxo"
        | "prime"
        | "novo"
        | "em_destaque"
        | "oferta"
        | "exclusivo"
        | "top"
        | "limited"
        | "lancamento"
        | "pronto_para_morar"
        | "cobertura"
        | "vista_panoramica"
        | "aluguel_flex"
      seller_type: "imoveis" | "automoveis"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      item_category: [
        "casa",
        "apartamento",
        "terreno",
        "comercial",
        "galpao",
        "flat",
        "aluguel",
        "carro",
        "moto",
        "caminhao",
        "van",
        "utilitario",
        "outros",
      ],
      item_status: ["ativo", "inativo"],
      item_tag: [
        "premium",
        "luxo",
        "prime",
        "novo",
        "em_destaque",
        "oferta",
        "exclusivo",
        "top",
        "limited",
        "lancamento",
        "pronto_para_morar",
        "cobertura",
        "vista_panoramica",
        "aluguel_flex",
      ],
      seller_type: ["imoveis", "automoveis"],
    },
  },
} as const
