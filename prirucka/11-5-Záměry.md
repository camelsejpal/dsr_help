---
title: Záměry
outline: deep
---

# 5 Záměry

Záměr stavby ve stavebním řízení je soubor plánů a dokumentace předkládaný stavebníkem stavebnímu úřadu za účelem získání stavebního povolení. Tento soubor popisuje zamýšlený stavební projekt a jeho technické i právní aspekty.

Pro zobrazení přehledu záměrů klikněte v levém menu na <Badge type="tip" text="Záměry" />.

![](_page_30_Figure_3.jpeg)

Následně se zobrazí seznam záměrů.

![](_page_30_Figure_5.jpeg)

## 5.1 Detail záměru

Pro zobrazení detailu vybraného záměru klikněte na položku v přehledu.

![](_page_31_Figure_2.jpeg)

### 5.1.1 Základní informace

Záložka **Základní informace** obsahuje základní údaje o záměru, například stav záměru nebo ID dokumentace.

![](_page_31_Picture_5.jpeg)

### 5.1.2 Řízení

V rámci řízení se posuzuje soulad projektu s územním plánem, stavebními předpisy a normami, vliv na životní prostředí a zajištění potřebných povolení a souhlasů.

Pro přechod na záložku klikněte na <Badge type="info" text="Řízení" />.

![](_page_32_Figure_3.jpeg)

### 5.1.3 Dokumentace

Projektová dokumentace obsahuje detailní plány stavby, architektonické výkresy, technické zprávy, specifikace materiálů, statické výpočty a další podklady potřebné pro realizaci a schválení projektu.

Pro přechod na záložku klikněte na <Badge type="info" text="Dokumentace" />.

#### Načtení a otevření dokumentace

1. Na záložce Dokumentace zkontrolujte, zda je dokumentace dostupná.
2. Klikněte na tlačítko **Načíst BPP**.
3. Po načtení se zobrazí tlačítko **Otevřít BPP**.
4. Kliknutím na tlačítko otevřete strukturu dokumentace.

![](_page_33_Figure_1.jpeg)
![](_page_33_Figure_3.jpeg)

V otevřeném okně můžete:
- rozbalovat jednotlivé složky pomocí šipek
- použít ikonu `+` pro rozbalení všech dokumentů
- použít ikonu `-` pro sbalení všech dokumentů

![](_page_34_Figure_2.jpeg)
![](_page_34_Figure_4.jpeg)

#### Stažení dokumentace

Dokumentaci je možné stáhnout do počítače pomocí tlačítka **Stáhnout BPP balíček**.

![](_page_35_Figure_1.jpeg)

Po kliknutí vyberte požadovaný formát:
- `BPP`
- `ZIP`

::: tip Doporučení
Pokud chcete obsah rychle otevřít v běžném prostředí počítače, je praktičtější zvolit formát `ZIP`.
:::

#### Práce se ZIP souborem

1. Zvolte formát `ZIP`.
2. Po stažení přejděte do složky Stažené soubory.
3. Otevřete stažený soubor.

![](_page_35_Picture_4.jpeg)
![](_page_36_Picture_1.jpeg)

#### Práce s BPP souborem

Pokud stáhnete dokumentaci ve formátu `BPP`, je potřeba změnit příponu souboru z `.bpp` na `.zip`.

::: warning Důležité
Bez přejmenování přípony z `.bpp` na `.zip` nelze balíček běžně rozbalit a pracovat s jeho obsahem v počítači.
:::

1. Přejděte do složky Stažené soubory.
2. Klikněte pravým tlačítkem na stažený soubor.
3. Zvolte možnost **Přejmenovat**.
4. Změňte příponu `.bpp` na `.zip`.
5. Potvrďte změnu klávesou Enter.
6. Na potvrzovací dotaz odpovězte **Ano**.

![](_page_36_Picture_4.jpeg)
![](_page_37_Picture_1.jpeg)
![](_page_38_Figure_0.jpeg)
![](_page_38_Figure_2.jpeg)

### 5.1.3.1 Porovnání verzí dokumentace

Systém ISSŘ umožňuje porovnávat jednotlivé verze projektové dokumentace.

1. Vyberte verzi záměru.
2. Otevřete BPP balíček.
3. Rozbalte všechny složky.
4. Zaškrtněte možnost **Porovnat s**.
5. Vyberte verzi, se kterou chcete aktuální verzi porovnat.

![](_page_38_Picture_7.jpeg)
![](_page_39_Figure_2.jpeg)

Výsledky porovnání jsou označeny barvami:
- **Modrá** – soubor byl změněn
- **Červená** – soubor byl v aktuální verzi smazán
- **Zelená** – soubor byl v aktuální verzi přidán
- **Černá** – soubor je beze změny

![](_page_40_Figure_6.jpeg)

### 5.1.3.2 Ověření dokumentace

Tato funkcionalita slouží k ověření schválené dokumentace po vydání pravomocného rozhodnutí.

::: info Přístupová omezení
Ověření dokumentace je dostupné pouze pro role **Referent**, **Vedoucí pracovník** a **Lokální administrátor** stavebního úřadu nebo dotčeného orgánu.
:::

Ověřením dokumentace:
- vznikne nová verze dokumentace
- obsah BPP balíčku je podepsán
- PDF soubory jsou doplněny o elektronický podpis a časové razítko

![](_page_41_Figure_7.jpeg)

::: warning Nevratná operace
Tento proces je nevratný. Před spuštěním vždy zkontrolujte, že je vybrána správná verze dokumentace.
:::

Postup:
1. Otevřete záložku **Dokumentace**.
2. Vyberte správnou verzi dokumentace.
3. Klikněte na tlačítko se symbolem razítka.
4. Potvrďte spuštění akce.

![](_page_42_Figure_1.jpeg)

Délka zpracování závisí na velikosti dokumentace a vytížení ISSŘ. O dokončení budete informováni notifikací.

![](_page_42_Figure_3.jpeg)
![](_page_43_Figure_1.jpeg)

::: details Co se po ověření stane
Po dokončení operace vznikne nová verze dokumentace s příznakem ověření. Událost se zapíše do auditních záznamů. Pokud bylo ověření spuštěno z řízení, ověřená verze se automaticky přiřadí k řízení.
:::

![](_page_43_Figure_3.jpeg)
![](_page_44_Figure_1.jpeg)

### 5.1.3.3 Vytvoření dokumentace úředníkem

Tato funkcionalita slouží pro vložení dokumentace zpracované kvalifikovanou osobou, kterou stavebník předá úřadu v listinné podobě.

1. Otevřete detail záměru.
2. Přejděte do sekce **Dokumentace**.
3. Klikněte na tlačítko **Vytvořit dokumentaci**.

![](_page_47_Figure_2.jpeg)

Po potvrzení budete přesměrováni do Portálu stavebníka, kde dokončíte vložení dokumentace podle zobrazených instrukcí.

![](_page_47_Figure_4.jpeg)
![](_page_48_Picture_1.jpeg)
![](_page_49_Figure_1.jpeg)

Po úspěšném dokončení:
- objeví se upozornění o vložení dokumentace
- na pozadí proběhne vytvoření BPP balíčku
- v ISSŘ se zobrazí notifikace
- záměru bude přiděleno ID dokumentace

![](_page_50_Figure_0.jpeg)
![](_page_50_Figure_3.jpeg)
![](_page_51_Figure_1.jpeg)
![](_page_51_Figure_3.jpeg)

## 5.1.4 Navrhované objekty

Navrhované objekty jsou budovy, stavby nebo jiné konstrukce plánované k výstavbě jako součást projektové dokumentace.

### 5.1.4.1 Přidání navrhovaného objektu

1. Klikněte na tlačítko **Přidat navrhovaný objekt**.
2. Vyplňte formulář ručně nebo použijte výběr parcely z mapy.
3. Doplňte druh objektu a další informace.
4. Uložte kliknutím na **Potvrdit**.

![](_page_52_Figure_6.jpeg)
![](_page_53_Picture_1.jpeg)
![](_page_53_Picture_3.jpeg)
![](_page_54_Figure_1.jpeg)
![](_page_54_Picture_3.jpeg)
![](_page_55_Figure_1.jpeg)

### 5.1.4.2 Hromadné ověření

Všechny navrhované objekty lze ověřit najednou pomocí tlačítka **Ověřit vše**.

![](_page_55_Figure_4.jpeg)
![](_page_56_Figure_1.jpeg)

### 5.1.4.3 Odstraněné objekty

Odebrané objekty lze zobrazit pomocí volby **Zobrazit odstraněné**. Tyto objekty jsou zvýrazněny červeně a je možné je znovu obnovit.

![](_page_56_Figure_5.jpeg)
![](_page_56_Picture_7.jpeg)
![](_page_57_Figure_0.jpeg)
![](_page_57_Figure_2.jpeg)
![](_page_57_Figure_4.jpeg)

## 5.2 Vyhledání záměru dle ID dokumentace

Tato funkce slouží k dohledání záměru podle ID dokumentace.

1. V evidenci záměrů klikněte na tlačítko **Vyhledat záměr**.
2. Zadejte ID dokumentace.
3. Potvrďte vyhledání.

![](_page_82_Figure_0.jpeg)
![](_page_82_Figure_2.jpeg)

::: warning Upozornění
Nevkládejte PID záměru. Pro tuto funkci se používá pouze **ID dokumentace**.
:::

Pokud je ID správné, systém otevře detail záměru. Pokud je ID nesprávné, zobrazí se chybová hláška.

![](_page_83_Figure_1.jpeg)
![](_page_83_Figure_3.jpeg)

## 5.3 Zpřístupnění dokumentace

Tato funkcionalita umožňuje získat přístup k dokumentaci a metadatům záměru.

1. V evidenci Záměrů vyhledejte požadovaný záměr.
2. Otevřete jeho detail.
3. Klikněte na tlačítko **Požádat o přístup k záměru**.
4. V dialogu klikněte na **Potvrdit**.

![](_page_84_Figure_2.jpeg)
![](_page_84_Figure_4.jpeg)

::: danger Právní upozornění
Dialog obsahuje varování před nezákonným prohlížením dokumentace. Potvrzením získáváte trvalý přístup k dokumentaci a metadatům záměru.
:::

Událost je zaznamenána v auditních záznamech a záměr je následně dostupný v evidenci záměrů v části **Můj úřad**.

![](_page_85_Figure_1.jpeg)
![](_page_85_Figure_3.jpeg)
