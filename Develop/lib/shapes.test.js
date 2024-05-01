const { Circle, Triangle, Square } = require('./shapes'); // Assuming shapes.js is your shapes file

// Helper function to test a shape's render method
function testShapeRender(shapeClass, expectedColor) {
  const testShape = new shapeClass(expectedColor, 'black', 'TEST');
  const svgContent = testShape.render();

  // Check if the rendered SVG contains the expected color
  expect(svgContent).toContain(`fill="${expectedColor}"`);
}

describe('Shape Tests', () => {
  it('Circle should render SVG with correct fill color', () => {
    testShapeRender(Circle, 'green'); 
  });

  it('Triangle should render SVG with correct fill color', () => {
    testShapeRender(Triangle, 'blue'); 
  });

  it('Square should render SVG with correct fill color', () => {
    testShapeRender(Square, 'red'); 
  });
});
