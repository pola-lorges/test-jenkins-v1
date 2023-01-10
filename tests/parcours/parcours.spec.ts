import { test, Page } from "@playwright/test"

const Connexion_win = require("../connexion/connexion_win.spec")
const Deconnexion_win = require("../deconnexion/deconnexion_win.spec")
const Creation_de_compte_win = require("../creation_compte/creation_compte_win.spec")
const Recherche_product_win = require("../recherche_produit/recherche_product_win.spec")
const Ajout_panier_win = require("../panier/ajout_pannier_win.spec")
const Vider_panier = require("../panier/vider_panier_win.spec")

test.describe("testes à la chaine @parcourss", async()=>{
    let page:Page
    test.beforeAll(async ({browser}) => {
        page = await browser.newPage()
    })

    // test("Creation_de_compte_win", async () => {
    //     await Creation_de_compte_win(page);
    //   });

    test("Connexion_win", async () => {
        await Connexion_win(page);
      });

      test("Recherche_product_win", async () => {
        await Recherche_product_win(page);
      });

      test("Ajout_panier_win", async () => {
        await Ajout_panier_win(page);
      });

      test("Vider_panier", async () => {
        await Vider_panier(page);
      });

      test("Deconnexion_win", async () => {
        await Deconnexion_win(page);
      });
})