# Interactive Ad Board

This is a React application for an interactive ad board where users can add, view, and delete advertisements.

## Features

- CRUD operations for advertisements.
- Context API used for state management.
- Unit tests for components and custom hooks.
- Integration tests for user flow.
- Visual regression testing for key components.
- Lazy loading using React.lazy and Suspense.
- Memoization to optimize expensive computations.
- Optimization of ad list using React.memo and keys.

## Optimization Strategies

- **Lazy Loading**: Components are lazily loaded using React.lazy and Suspense, improving initial load time by loading components only when they are needed.

- **Memoization**: Memoization is applied to optimize expensive computations and avoid unnecessary re-renders, improving performance by preventing redundant calculations.

- **Component Optimization**: The ad list is optimized using React.memo and keys for list items to minimize the number of DOM operations during updates, enhancing performance by reducing unnecessary re-renders.

- **Accessibility and UX**: The interface is designed to be user-friendly and accessible for users with limited capabilities, ensuring a positive user experience for all users.

## Performance Analysis

Performance of the application was analyzed using tools such as Lighthouse and WebPageTest before and after optimizations. The following improvements were observed:

- **Lighthouse Score**: The Lighthouse score increased from X to Y after optimizations, indicating improved performance, accessibility, and best practices.

- **WebPageTest Results**: WebPageTest results showed reduced load times and improved performance metrics such as First Contentful Paint (FCP) and Time to Interactive (TTI) after optimizations.

For detailed performance analysis, refer to the following links:

- [Lighthouse Report Before Optimization](link-to-lighthouse-report-before)
- [Lighthouse Report After Optimization](link-to-lighthouse-report-after)
- [WebPageTest Results Before Optimization](link-to-webpagetest-results-before)
- [WebPageTest Results After Optimization](link-to-webpagetest-results-after)

## Running the Application

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/interactive-ad-board.git`
2. Navigate to the project directory: `cd interactive-ad-board`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to view the application.

## Testing

To run tests, use the following command:

```bash
npm test
```
