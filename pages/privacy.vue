<template>
  <AtomsWrapper
    theme="light"
    is-full-screen
    html-tag="section"
    y-padding="lg"
    class="flex !h-[100svh] min-h-screen flex-col bg-typo-100"
  >
    <template #default="{ isFullScreen, theme }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-8" :theme="theme">
            {{ $t('pages.privacy.title') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsOneComponentsRow y-gap="none">
          <div class="col-span-full space-y-2xl">
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Allgemeine Hinweise </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText
                      >Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                      Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                      Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
                      entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Datenerfassung auf dieser Website </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4" :theme="theme">
                      Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                    </AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                      können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
                      entnehmen.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4" :theme="theme"> Wie erfassen wir Ihre Daten? </AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
                      z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                      IT- Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem
                      oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
                      Website betreten.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4" :theme="theme"> Wofür nutzen wir Ihre Daten? </AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                      Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4" :theme="theme">
                      Welche Rechte haben Sie bezüglich Ihrer Daten?
                    </AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                      gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
                      oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
                      haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
                      Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                      zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
                      zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
                      wenden.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4" :theme="theme">
                      Analyse-Tools und Tools von Drittanbietern
                    </AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht
                      vor allem mit sogenannten Analyseprogrammen.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                      Datenschutzerklärung.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Externes Hosting </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText
                      >Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                      werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
                      IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                      Websitezugriffe und sonstige Daten, die über eine Website generiert werden,
                      handeln.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                      bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
                      effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6
                      Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
                      Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
                      soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
                      des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist
                      jederzeit widerrufbar.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung
                      seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten
                      befolgen.</AtomsBodyText
                    >
                    <AtomsBodyText>Wir setzen folgende(n) Hoster ein:</AtomsBodyText>
                    <AtomsBodyText>Netlify, Inc., ADDRESS</AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4" :theme="theme"> Auftragsverarbeitung </AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
                      geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
                      gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren
                      Weisungen und unter Einhaltung der DSGVO verarbeitet.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Datenschutz </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText
                      >Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                      Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                      sowie dieser Datenschutzerklärung.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten
                      erhoben.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
                      vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
                      erläutert auch, wie und zu welchem Zweck das geschieht.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per
                      E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                      Dritte ist nicht möglich.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Hinweis zur verantwortlichen Stelle </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText
                      >Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</AtomsBodyText
                    >
                    <div>
                      <AtomsBodyText>{{ $t('general.personal.company') }}</AtomsBodyText>
                      <AtomsBodyText>{{ $t('general.personal.street') }}</AtomsBodyText>
                      <AtomsBodyText>{{ $t('general.personal.city') }}</AtomsBodyText>
                      <AtomsBodyText>
                        <NuxtLink
                          class="underline"
                          :to="`mailto:${$t('general.personal.email.entry')}`"
                          :title="$t('general.personal.email.title')"
                          >{{ $t('general.personal.email.entry') }}</NuxtLink
                        >
                      </AtomsBodyText>
                      <AtomsBodyText>
                        <NuxtLink
                          class="underline"
                          :to="`tel:${$t('general.personal.phone.entry')}`"
                          :title="$t('general.personal.phone.title')"
                          >{{ $t('general.personal.phone.entry') }}</NuxtLink
                        >
                      </AtomsBodyText>
                      <AtomsBodyText>
                        <NuxtLink
                          class="underline"
                          target="_blank"
                          :to="`https://${$t('general.personal.website.entry')}`"
                          :title="$t('general.personal.website.title')"
                          >{{ $t('general.personal.website.entry') }}</NuxtLink
                        >
                      </AtomsBodyText>
                    </div>
                    <AtomsBodyText
                      >Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                      anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen,
                      E-Mail-Adressen o. Ä.) entscheidet.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Speicherdauer </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                      verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                      Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
                      Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
                      zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder
                      handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
                      dieser Gründe.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme">
                  Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
                </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
                      Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
                      besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
                      ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die
                      Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
                      Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via
                      Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage
                      von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                      Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
                      Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten,
                      sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von
                      Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
                      Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
                      Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Empfänger von personenbezogenen Daten </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      m Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen.
                      Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen
                      erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im
                      Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z.
                      B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1
                      lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe
                      erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur
                      auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
                      Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme">
                  Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                      können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
                      Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme">
                  Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21
                  DSGVO)
                </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE
                      JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
                      VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF
                      DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
                      VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                      WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
                      KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
                      UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
                      VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO). WERDEN IHRE
                      PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
                      JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
                      DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER
                      DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                      ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2
                      DSGVO).
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme">
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                      Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                      Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
                      unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Recht auf Datenübertragbarkeit </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                      Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                      maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
                      einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Auskunft, Berichtigung und Löschung </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                      Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                      Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                      sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Verwendung von Google Analytics </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Wir verwenden auf unserer Website den Webanalysedienst Google Analytics der Google Google Ireland
                      Limited (Gordon House, Barrow Street, Dublin 4, Irland; „Google“). Die Datenverarbeitung dient dem
                      Zweck der Analyse dieser Website und ihrer Besucher sowie für Marketing- und Werbezwecke. Dazu
                      wird Google im Auftrag des Betreibers dieser Website die gewonnenen Informationen benutzen, um
                      Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und
                      um weitere, mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber
                      dem Websitebetreiber zu erbringen. Dabei können u.a. folgende Informationen erhoben werden:
                      IP-Adresse, Datum und Uhrzeit des Seitenaufrufs, Klickpfad, Informationen über den von Ihnen
                      verwendeten Browser und das von Ihnen verwendete Device (Gerät), besuchte Seiten, Referrer-URL
                      (Webseite, über die Sie unsere Webseite aufgerufen haben), Standortdaten, Kaufaktivitäten. Die im
                      Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten
                      von Google zusammengeführt.
                    </AtomsBodyText>
                    <AtomsBodyText>
                      Google Analytics verwendet Technologien wie Cookies, Webspeicher im Browser und Zählpixel, die
                      eine Analyse der Benutzung der Website durch Sie ermöglichen. Die dadurch erzeugten Informationen
                      über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA
                      übertragen und dort gespeichert. Für die USA ist kein Angemessenheitsbeschluss der EU-Kommission
                      vorhanden. Die Datenübermittlung erfolgt u.a auf Grundlage von Standardvertragsklauseln als
                      geeignete Garantien für den Schutz der personenbezogenen Daten, einsehbar unter:
                      <NuxtLink
                        class="underline"
                        target="_blank"
                        :to="`https://${$t('pages.privacy.content.analytics.policy.website.entry')}`"
                        :title="$t('pages.privacy.content.analytics.policy.website.title')"
                        >{{ $t('pages.privacy.content.analytics.policy.website.entry') }}</NuxtLink
                      >
                      und
                      <NuxtLink
                        class="underline"
                        target="_blank"
                        :to="`https://${$t('pages.privacy.content.analytics.business.website.entry')}`"
                        :title="$t('pages.privacy.content.analytics.business.website.title')"
                        >{{ $t('pages.privacy.content.analytics.business.website.entry') }}</NuxtLink
                      >. owohl Google als auch staatliche US-Behörden haben Zugriff auf Ihre Daten. Ihre Daten können
                      von Google mit anderen Daten, wie beispielsweise Ihrem Suchverlauf, Ihren persönlichen Accounts,
                      Ihren Nutzungsdaten anderer Geräte und allen anderen Daten, die Google zu Ihnen vorliegen hat,
                      verknüpft werden.
                    </AtomsBodyText>
                    <AtomsBodyText
                      >Auf dieser Website ist die IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google
                      innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
                      über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
                      IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f
                      DSGVO aus unserem überwiegenden berechtigten Interesse an der bedarfsgerechten und zielgerichteten
                      Gestaltung der Website. Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen Situation
                      ergeben, jederzeit dieser Verarbeitungen Sie betreffender personenbezogener Daten zu
                      widersprechen.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Sie können die Erfassung der durch Google Analytics erzeugten und auf Ihre Nutzung der Website
                      bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
                      Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plug-in herunterladen
                      und installieren:
                      <NuxtLink
                        class="underline"
                        target="_blank"
                        :to="`https://${$t('pages.privacy.content.analytics.optout.website.entry')}`"
                        :title="$t('pages.privacy.content.analytics.optout.website.title')"
                        >{{ $t('pages.privacy.content.analytics.optout.website.entry') }}</NuxtLink
                      >.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Um die Datenerfassung und -speicherung durch Google Analytics geräteübergreifend zu verhindern,
                      können Sie einen Opt-Out-Cookie setzen. Opt-Out-Cookies verhindern die zukünftige Erfassung Ihrer
                      Daten beim Besuch dieser Website. Sie müssen das Opt-Out auf allen genutzten Systemen und Geräten
                      durchführen, damit dies umfassend wirkt. Wenn Sie das Opt-out-Cookie löschen, werden wieder
                      Anfragen an Google übermittelt. Wenn Sie hier klicken, wird das Opt-Out-Cookie gesetzt: Google
                      Analytics deaktivieren.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter
                      <NuxtLink
                        class="underline"
                        target="_blank"
                        :to="`https://${$t('pages.privacy.content.analytics.terms.website.entry')}`"
                        :title="$t('pages.privacy.content.analytics.terms.website.title')"
                        >{{ $t('pages.privacy.content.analytics.terms.website.entry') }}</NuxtLink
                      >
                      bzw. unter
                      <NuxtLink
                        class="underline"
                        target="_blank"
                        :to="`https://${$t('pages.privacy.content.analytics.intl.website.entry')}`"
                        :title="$t('pages.privacy.content.analytics.intl.website.title')"
                        >{{ $t('pages.privacy.content.analytics.intl.website.entry') }}</NuxtLink
                      >
                      sowie unter
                      <NuxtLink
                        class="underline"
                        target="_blank"
                        :to="`https://${$t('pages.privacy.content.analytics.cookies.website.entry')}`"
                        :title="$t('pages.privacy.content.analytics.cookies.website.title')"
                        >{{ $t('pages.privacy.content.analytics.cookies.website.entry') }}</NuxtLink
                      >.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Recht auf Einschränkung der Verarbeitung </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                      verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der
                      Verarbeitung besteht in folgenden Fällen:
                    </AtomsBodyText>
                    <ul class="list-inside list-decimal space-y-sm">
                      <li>
                        Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
                        benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
                        Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                      </li>
                      <li>
                        Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
                        statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                      </li>
                      <li>
                        Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                        Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                        Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                      </li>
                      <li>
                        Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung
                        zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen
                        Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen.
                      </li>
                    </ul>
                    <AtomsBodyText>
                      Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten –
                      von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung
                      oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                      juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen
                      Union oder eines Mitgliedstaats verarbeitet werden.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> SSL- bzw. TLS-Verschlüsselung </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText>
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie
                      zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                      TLS- Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                      Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </AtomsBodyText>
                    <AtomsBodyText>
                      Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                      übermitteln, nicht von Dritten mitgelesen werden.
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Cookies </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText
                      >Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und
                      richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer
                      einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät
                      gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente
                      Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine
                      automatische Löschung durch Ihren Webbrowser erfolgt.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-
                      Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von
                      Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von
                      Zahlungsdienstleistungen).</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
                      Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die
                      Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu
                      Werbezwecken verwendet werden.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
                      bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
                      Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige
                      Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
                      Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der
                      Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung
                      seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
                      Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                      Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung
                      ist jederzeit widerrufbar.
                    </AtomsBodyText>
                    <AtomsBodyText
                      >Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden
                      und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                      ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                      Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.Sie
                      können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                      Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                      ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                      Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt
                      sein.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser
                      Datenschutzerklärung entnehmen.</AtomsBodyText
                    >
                    <MoleculesList
                      :list="[
                        {
                          title: 'Name',
                          entries: ['i18n_redirected'],
                        },
                        {
                          title: 'Anbieter',
                          entries: [
                            {
                              name: t('general.personal.website.entry'),
                              to: `https://${t('general.personal.website.entry')}`,
                              title: t('general.personal.website.title'),
                            },
                          ],
                        },
                        {
                          title: 'Zweck',
                          entries: [
                            'Bestimmt die bevorzugte Sprache des Besuchers. Ermöglicht der Webseite, beim erneuten Besuch des Besuchers die bevorzugte Sprache festzulegen.',
                          ],
                        },
                        {
                          title: 'Ablauf',
                          entries: ['365 Tage'],
                        },
                        {
                          title: 'Typ',
                          entries: ['HTTP Cookie'],
                        },
                      ]"
                    >
                    </MoleculesList>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Server-Log-Dateien </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText></AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Auskunft, Berichtigung und Löschung </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText
                      >Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                      Server-Log- Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</AtomsBodyText
                    >
                    <ul class="list-inside list-disc space-y-sm">
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <AtomsBodyText
                      >Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                      Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der
                      Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
            <MoleculesInformationText>
              <template #headline>
                <AtomsHeadline html-tag="h3" :theme="theme"> Anfrage per E-Mail, Telefon oder Telefax </AtomsHeadline>
              </template>
              <template #content>
                <AtomsInformationTextItem>
                  <template #text>
                    <AtomsBodyText
                      >Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller
                      daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
                      Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung
                      weiter.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                      Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                      Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
                      berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs.
                      1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                      wurde; die Einwilligung ist jederzeit widerrufbar.</AtomsBodyText
                    >
                    <AtomsBodyText
                      >Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur
                      Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                      Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
                      gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
                      unberührt.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
          </div>
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
// TODO: NETLIFY POLICY
const { t } = useI18n();

definePageMeta({
  layout: 'footerless',
});
</script>
