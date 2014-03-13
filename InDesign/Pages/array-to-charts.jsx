var data = {
  "ph": 210, // page height for better handling
  "pw": 297, // page width for better handling
  "contents": [
    'Non Linear Narrative', 'What is it?',
    'Viele Jahre später sollte der Oberst Aureliano Buendia sich vor dem Erschießungskommando an jenen fernen Nachmittag erinnern, an dem sein Vater ihn mitnahm, um das Eis kennenzulernen.\rGabriel García Márquez, Hundert Jahre Einsamkeit',
    'Danke.'
  ]
};


var run = function (d) {
  var doc = app.documents.add({
    documentPreferences: {
      facingPages: false,
      pageHeight: d.ph,
      pageWidth: d.pw
    }
  });

  if (doc === null) {
    return;
  } else {
    var p1 = doc.paragraphStyles.add({
      justification: Justification.CENTER_ALIGN
    });

    for (var i = 0; i < d.contents.length; i++) {
      var pg = doc.pages.add();
      var tf = pg.textFrames.add({
        contents: d.contents[i],
        geometricBounds: [23, 23, d.ph - 23, d.pw - 23],
        textFramePreferences: {
          verticalJustification: VerticalJustification.CENTER_ALIGN
        }
      });
      tf.paragraphs.everyItem()
        .appliedParagraphStyle = p1;
    }

  }
};

run(data);