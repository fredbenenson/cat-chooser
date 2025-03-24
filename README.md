# Dog Chooser

An interactive web application that helps users find their perfect dog breed based on their preferences.

## Understanding the 3D Visualization: Principal Component Analysis (PCA)

### What is Principal Component Analysis (PCA)?

Principal Component Analysis (PCA) is a technique that helps us understand complex data with many variables by reducing it to fewer dimensions that still capture the essential patterns. In our dog breed visualization:

1. **The Challenge**: We have 18 different traits for each dog breed (size, energy level, friendliness, grooming needs, etc.). This is an 18-dimensional space, which is impossible for humans to visualize directly.

2. **The Solution**: PCA finds patterns and relationships among these 18 traits and condenses them into just 3 main dimensions (the principal components) that capture the most important differences between dog breeds.

### How PCA Works in Simple Terms

1. **Finding What Varies Most**: PCA first identifies which traits vary the most across different dog breeds. For example, if all dogs had exactly the same size, then size wouldn't be useful for distinguishing between breeds.

2. **Identifying Patterns**: PCA discovers which traits tend to change together. For instance, it might find that high-energy dogs also tend to have strong hunting instincts, while dogs that require more grooming tend to shed more.

3. **Creating New Dimensions**: Based on these patterns, PCA creates new "super traits" (principal components) that are combinations of the original traits. These aren't single traits like "size" anymore, but rather blends of multiple traits that together explain the most variation between dog breeds.

4. **Prioritizing Information**: PCA ranks these new dimensions by how much variation they explain. The first principal component explains the most variation, the second explains the second most, and so on.

### What Our Axes Represent

In our visualization:

- **X-axis (PC1)**: Primarily represents size and energy level. Breeds on the right tend to be larger and more energetic, while breeds on the left tend to be smaller and more relaxed.

- **Y-axis (PC2)**: Primarily represents sociability and affection. Breeds higher up tend to be more friendly, affectionate, and social, while breeds lower down tend to be more independent.

- **Z-axis (PC3)**: Primarily represents maintenance and grooming needs. Breeds toward the front need more grooming and maintenance, while breeds toward the back are typically lower maintenance.

### Your Ideal Dog

After completing the questionnaire, a red pulsing sphere appears in the visualization. This represents your "ideal dog" based on your preferences, projected into the same 3D space as the actual dog breeds.

- Dog breeds positioned closer to your ideal point are better matches for your preferences.
- By exploring the 3D space, you can visually see which breeds are similar to your preferences and to each other.

### Technical Details (For the Curious)

Our implementation uses a simplified version of PCA:

1. We center the data by subtracting the mean of each trait.
2. We compute a simplified covariance matrix to understand how traits relate to each other.
3. We create approximations of the principal components based on key traits:
   - PC1 is influenced by size and energy
   - PC2 is influenced by friendliness, affection, and independence
   - PC3 is influenced by grooming, shedding, and health
4. We ensure these components are roughly orthogonal (perpendicular) to each other.
5. We project both the dog breeds and your preferences onto this 3D space.

This approach provides an intuitive and visually engaging way to compare dog breeds based on multiple traits simultaneously, making it easier to find your perfect canine companion.