import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DrawerRecords } from "@/components";

const meta = {
  title: "DrawerRecords",
  component: DrawerRecords,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DrawerRecords>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockGetData = async () => {
  //console.log("Fetching data...");
};

export const Test: Story = {
  args: {
    data: [
      {
        id: 8,
        action: "PATCH: AffiliatesController.updateAffiliateFileDossier",
        description:
          "GERALDINE ROMERO registró/actualizó para el afiliado con NUP 13118 el expediente: Fondo de Retiro Creado exitosamente.",
        createdAt: "2025-10-21 09:26:31.862",
      },
      {
        id: 9,
        action: "PATCH: AffiliatesController.updateAffiliateFileDossier",
        description:
          "CHRISTIAN SANDOVAL registró/actualizó para el afiliado con NUP 3600 el documento: Certificado de matrimonio en original y actualizado, emitido por el SERECI. Actualizado exitosamente.",
        createdAt: "2025-10-20 09:26:31.862",
      },
      {
        id: 10,
        action: "POST: AffiliatesController.createAffiliateFileDossier",
        description: "ARACELY LAURE realizó el análisis de documentos.",
        createdAt: "2025-10-20 09:25:31.862",
      },
      {
        id: 6,
        action: "DELETE: AffiliatesController.deleteAffiliateFileDossier",
        description:
          "CHRISTIAN SANDOVAL registró/actualizó para el afiliado con NUP 33241 el documento: Certificado de calificación de años de servicio en original o copia legalizada, emitido por el Comando General de la Policía Boliviana. Actualizado exitosamente.",
        createdAt: "2024-12-05 09:26:31.862",
      },
      {
        id: 7,
        action: "PATCH: AffiliatesController.updateAffiliateFileDossier",
        description:
          "CHRISTIAN SANDOVAL registró/actualizó para el afiliado con NUP 33241 el documento: Certificado de calificación de años de servicio en original o copia legalizada, emitido por el Comando General de la Policía Boliviana. Actualizado exitosamente.",
        createdAt: "2024-12-05 09:26:31.862",
      },
      {
        id: 5,
        action: "PATCH: AffiliatesController.updateAffiliateFileDossier",
        description:
          "CHRISTIAN SANDOVAL registró/actualizó para el afiliado con NUP 33241 el documento: Certificado de calificación de años de servicio en original o copia legalizada, emitido por el Comando General de la Policía Boliviana. Actualizado exitosamente.",
        createdAt: "2024-10-06 09:26:31.862",
      },
      {
        id: 4,
        action: "PATCH: AffiliatesController.updateAffiliateFileDossier",
        description:
          "CHRISTIAN SANDOVAL registró/actualizó para el afiliado con NUP 33241 el documento: Certificado de calificación de años de servicio en original o copia legalizada, emitido por el Comando General de la Policía Boliviana. Actualizado exitosamente.",
        createdAt: "2023-05-10 09:26:31.862",
      },
    ],
    getData: mockGetData,
  },
};
