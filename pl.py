import matplotlib.pyplot as plt
import numpy as np

# Calculate t and the side length s
t = 2 - np.sqrt(3)
s = np.sqrt(2) * (np.sqrt(3) - 1)

# Define the vertices of the triangle and the unit square
triangle = np.array([[0, 0],
                     [t, 1],
                     [1, t],
                     [0, 0]])

square = np.array([[0,0],
                   [1,0],
                   [1,1],
                   [0,1],
                   [0,0]])

# Plotting
fig, ax = plt.subplots(figsize=(5,5))
ax.plot(square[:,0], square[:,1], 'k-', lw=2, label='Unit Square')
ax.plot(triangle[:,0], triangle[:,1], 'r-', lw=2, label='Equilateral Triangle')
ax.scatter(triangle[:-1,0], triangle[:-1,1], color='red')
ax.set_xlim(-0.1, 1.1)
ax.set_ylim(-0.1, 1.1)
ax.set_aspect('equal')
ax.legend()
ax.set_title("Largest Equilateral Triangle in a Unit Square")
plt.xlabel("x")
plt.ylabel("y")
plt.show()
