import React from "react";
import "./submitAPaper.css";

const SubmitAPaper = () => {
  return (
    <div className="submit_paper_container">
      <h1>Submit A Paper</h1>
      <div className="submission_div">
        <h3>Submission</h3>
        <p>
          <b>
            Authors are requested to submit their papers electronically by
            e-mail attachments to the Editorial : ijafms@gmail.com.
          </b>
          The attached files should be in MS Word, WordPerfect or RTF format.
          Any supplemental files should also be in Microsoft Word, RTF, Word
          Perfect, or Excel format.<b> PDFs are not acceptable.</b> Authors are
          requested to submit the text, tables, and artwork in electronic form
          to this address. The Publisher and Editor regret that they are not
          able to consider submissions that do not follow these procedures. All
          correspondence, including notification of the Editor's decision and
          requests for revision, takes place by e-mail.
        </p>
      </div>
      <div className="submission_declaration_div">
        <h3>Submission Declaration</h3>
        <p>
          Submission of an article implies that the work described has not been
          published previously (except in the form of an abstract or as part of
          a published seminar, lecture or academic thesis), that it is not under
          consideration for publication elsewhere, that its publication is
          approved by all authors and tacitly or explicitly by the responsible
          authorities where the work was carried out, and that, if accepted, it
          will not be published elsewhere including electronically in the same
          form, in English or in any other language, without the written consent
          of the copyright-holder. Each submission must contain “Submission
          Declaration Statements” in its cover letter as follows:
          <br />
          <br />
          [“We hereby confirm that the manuscript has no any actual or potential
          conflict of interest with any parties, including any financial,
          personal or other relationships with other people or organizations
          within three years of beginning the submitted work that could
          inappropriately influence or be perceived to influence. We confirm
          that the paper has not been published previously, it is not under
          consideration for publication elsewhere, and the manuscript is not
          being simultaneously submitted elsewhere.”]{" "}
        </p>
      </div>
      <div className="publication_ethics_div">
        <h3>Publication Ethics and Publication Malpractice</h3>
        <p>
          The journal is committed to upholding the highest standards of
          publication ethics and takes all possible measures against any
          publication malpractices. All authors submitting their works to the
          journal for publication as original articles attest that the submitted
          works represent their authors’ contributions and have not been copied
          or plagiarized in whole or in part from other works. The authors
          acknowledge that they have disclosed all and any actual or potential
          conflicts of interest with their work or partial benefits associated
          with it. In the same manner, the journal is committed to objective and
          fair double-blind peer-review of the submitted for publication works
          and to prevent any actual or potential conflict of interests between
          the editorial and review personnel and the reviewed material. Any
          departures from the above-defined rules should be reported directly to
          the Editors-in-Chief, who is unequivocally committed to providing
          swift resolutions to any of such a type of problems. Further to the
          above, the journal is following the highest standards of publication
          ethics and the Code of Conduct for Journal Editors. By joining and
          supporting the{" "}
          <a href="https://publicationethics.org/guidance/Guidelines">
            Committee on Publication Ethics (COPE)
          </a>{" "}
          the journal will help support the ethical imperative in promoting
          publication ethics and providing advice for editors and publishers.{" "}
        </p>
      </div>
      <div className="plagiarism_policies_div">
        <h3>Plagiarism Policies and Ethical Guidelines</h3>
        <p>
          International Jounral of Accounting, Finance and Management (IJAFMS)
          uses the Turninit and iThenticate software to detect instances of
          overlapping and similar text in submitted manuscripts. You can be
          reassured that IJAFMS is committed to actively combating plagiarism
          and publishing original research. Turninit/iThenticate compares
          submitted documents to extensive data repositories to create a
          comprehensive Similarity Report, which highlights and provides links
          to any significant text matches, helping to ensure that you are
          submitting an original and well-attributed document.
          Turninit/iThenticate for Researchers is a separate service to Cross
          Check. Per IJAFMS’s{" "}
          <a href="https://www.jafeb.org/journal/journalintro.do?journalSeq=J000171&introMenuId=0106">
            "Code of Ethics"
          </a>{" "}
          authors are expected to adhere to the guidelines outlined in this
          section.
        </p>
      </div>
      <div className="conflict_interest_div">
        <h3>Conflict of Interest</h3>
        <p>
          All authors are requested to disclose any actual or potential conflict
          of interest including any financial, personal or other relationships
          with other people or organizations within three years of beginning the
          submitted work that could in appropriately influence, or be perceived
          to influence, their work.
        </p>
      </div>
      <div className="copyright_div">
        <h3>Copyright</h3>
        <p>
          Upon acceptance of an article, authors will be asked to complete a
          "Journal Publishing Agreement Form" of the Publisher. Acceptance of
          the agreement will ensure the widest possible dissemination of
          information. An e-mail will be sent to the corresponding author
          confirming receipt of the manuscript together with a "Journal
          Publishing Agreement Form". After publication of an article,{" "}
          <b>
            the Copyright of the article transfers and belongs to the Author(s).
            This is an Open Access journal
          </b>
          distributed.
        </p>
      </div>
    </div>
  );
};

export default SubmitAPaper;
